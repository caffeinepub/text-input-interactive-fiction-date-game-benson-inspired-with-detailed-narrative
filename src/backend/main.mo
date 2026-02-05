import Text "mo:core/Text";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  public type Tone = {
    isAnnoyed : Bool;
    isRuleFocused : Bool;
    isWarm : Bool;
  };

  public type Request = {
    text : Text;
    intendedTone : Tone;
  };

  public type Response = {
    text : Text;
    actualTone : Tone;
  };

  let history = List.empty<Response>();

  func determineResponseText(request : Request) : Text {
    if (request.text.contains(#text "rule")) {
      if (request.intendedTone.isRuleFocused) {
        "Of course! I can't believe you'd even think to break the rules! Rules are not just suggestions, you know!";
      } else {
        "Well, since you brought it up, let's clarify the rules for everyone.";
      };
    } else if (request.text.contains(#text "hello")) {
      if (request.intendedTone.isWarm) {
        "Hi there! Welcome! I hope you're having a wonderful day!";
      } else {
        "Hello. Let's get down to business, shall we?";
      };
    } else {
      "I'm not sure how to respond to that. Maybe try rephrasing?";
    };
  };

  func adjustTone(desiredTone : Tone, contextTone : Tone) : Tone {
    {
      isAnnoyed = desiredTone.isAnnoyed or contextTone.isAnnoyed;
      isRuleFocused = desiredTone.isRuleFocused or contextTone.isRuleFocused;
      isWarm = if (contextTone.isAnnoyed) {
        false;
      } else {
        desiredTone.isWarm or contextTone.isWarm;
      };
    };
  };

  public shared ({ caller }) func askCharacter(request : Request) : async Response {
    let contextTone = switch (history.last()) {
      case (null) { { isAnnoyed = false; isRuleFocused = false; isWarm = false } };
      case (?lastResponse) { lastResponse.actualTone };
    };

    let adjustedTone = adjustTone(request.intendedTone, contextTone);
    let responseText = determineResponseText(request);

    let response : Response = {
      text = responseText;
      actualTone = adjustedTone;
    };

    history.add(response);
    response;
  };

  public query ({ caller }) func getHistory() : async [Response] {
    history.toArray();
  };

  public shared ({ caller }) func clearHistory() : async () {
    if (history.isEmpty()) {
      Runtime.trap("History is already empty");
    };
    history.clear();
  };
};
