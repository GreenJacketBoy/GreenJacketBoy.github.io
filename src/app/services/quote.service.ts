import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class QuoteService {

  private footerQuotes: Array<string> = [
    '"I have great ideas, 5 days before launch."', // https://youtu.be/XAeKtyL2m-Q&t=19
    '"When I\'m stressed, I create a toxic atmosphere. So people don\'t give me work."', // https://youtu.be/XAeKtyL2m-Q&t=300
    '"Well, as Harisson Ford once said : If we would have asked the people what they wanted, they would have asked for a faster C++."', // https://youtu.be/TGfQu0bQTKc&t=0
    '"And which part did you write in Rust ? The front-end or the back-end ?", "... N- No the Browser."', // https://youtu.be/TGfQu0bQTKc&t=118
    '"Is Rust good for Game Development ? Rust is good for everything ! There are currently 5 Games written in Rust. And 50 Game Engines."', // https://youtu.be/TGfQu0bQTKc&t=168
    '"Dude, did you port Doom onto the microwave ?", "... This was a microwave ?"', // https://youtu.be/kKAue9DiHc0&t=6
    '"Yo, our network\'s down.", "Perfect, I was stress testing it."', // https://youtu.be/kKAue9DiHc0&t=17
    '"Yo, did you see this new AR library on Twitter ?", "Doesn\'t fit our use case.", "... It was out since today, when have you tried it ?", "... It\'s my library."', // https://youtu.be/kKAue9DiHc0&t=50
    '"What about making it readable ?", "... Who else needs to read this ?"', // https://youtu.be/kKAue9DiHc0&t=110
    '"I\'m horrible at coding"', // https://youtu.be/kKAue9DiHc0&t=181
    '"No SSL is a joke, I know the guy who built the backdoor.", "What backdoor ?", "What ?"', // https://youtu.be/kKAue9DiHc0&t=225
    '"Oh my OS just broke, just let me fix that first."', // https://youtu.be/kKAue9DiHc0t=262
    '"Oh that\'s just ... compiler small talk.", "It\'s Red.", "Compilers always be complaining."', // https://youtu.be/kKAue9DiHc0&t=276
    '"You\'ve been missing for 2 months, what are you, detoxing from social media ?", "Detoxing from society."', // https://youtu.be/3yeb5gSLnjw&t=18
    '"Don\'t you wanna tape off the camera for safety reasons ?", "Yo it\'s Linux, the camera doesn\'t work."', // https://youtu.be/3yeb5gSLnjw&t=26
    '"You saw the new engineer role applications ? It\'s just ... resumes with anime pictures."', // https://youtu.be/3yeb5gSLnjw&t=40
    '"Am I learning from the AI, or is the AI really learning from me ... They should be paying me per token."', // https://youtu.be/3yeb5gSLnjw&t=69
    '"Yeah NixOS is the best for every use case."', // https://youtu.be/3yeb5gSLnjw&t=76
    '"It\'s generating. This is what I live for."', // https://youtu.be/3yeb5gSLnjw&t=78
    '"The bug isn\'t in my code. It\'s in the Intel architecture."', // https://youtu.be/3yeb5gSLnjw&t=82
    '"My Vim is better than their Vim. Cross-compiled it from punch cards."', // https://youtu.be/3yeb5gSLnjw&t=102
    '"Ah, "Quantum Computing" ?"', // https://youtu.be/3yeb5gSLnjw&t=105
    '"What\'s with your backspace key ?", "Don\'t worry, I don\'t make mistakes."', // https://youtu.be/3yeb5gSLnjw&t=168
    '"No I\'m busy.", "What are you busy with dude ?!", "It starts with \'A\' and ends with \'GI\', I don\'t have to tell you."', // https://youtu.be/3yeb5gSLnjw&t=191
    '"Don\'t worry about me, worry about the world."', // https://youtu.be/3yeb5gSLnjw&t=205 
    '"I get popUps every time someone tries to break my firewall. Never had popUp in a year. What are they afraid of ?"', // https://youtu.be/3yeb5gSLnjw&t=252
    '"You\'re sick ? You\'re not sick okay ? This, is America."', // https://youtu.be/GwQ3YE_O6l4&t=180
    '"Look, it\'s not that easy to redefine our service offering from Web3 to AI.", "Hm... What about Quantum Computing ?"', // https://youtu.be/GwQ3YE_O6l4&t=295
    '"We keep our satisfaction score at 5. Always. Because we keep changing up the rating box layout, so that the only link that works, is the 5."', // https://youtu.be/YeNBsW0Slrk&t=81
    '"I also do Calisthenics, Functional training, Propriosceptive training, Cardio, Low carbs diet... But I don\'t really work out, so ..."', // https://youtu.be/Pw1UokzMQ6k&t=174
    '"Just do it. Adidas."', // https://youtu.be/JeNS1ZNHQs8?&t=30
    '"Technical debt ? I\'m not technical."', // https://youtu.be/JeNS1ZNHQs8?&t=95
    '"This is the craziest Todo list app I\'ve ever built."', // https://youtu.be/JeNS1ZNHQs8?&t=233
    '"Private key ? The one I put on my github ?"', // https://youtu.be/JeNS1ZNHQs8?&t=281
    '"Now our backend is five-line Go function running on AWS lambda. Somehow we\'re paying more!"', // https://youtu.be/rXPpkzdS-q4?t=29
    '"Cloud is only means to an end. End goal is for cloud vendors to get rich."', // https://youtu.be/rXPpkzdS-q4?t=95
    '"Quick hot fix in Cloud CLI, and then server starts burning."', // https://youtu.be/rXPpkzdS-q4?t=168
    '"I memorized the entire metro map last night, so don\'t embarass me by looking lost."', // https://youtu.be/JsB80oxyUYg?t=194
    '"I said dress for any occasion OK ? When I told you to take the ski leggings, you said "I am not mentally ill"."', // https://youtu.be/JsB80oxyUYg?t=211
    '"We\'re going up the mountain to the 2nd biggest military base. Why is it interesting ? I don\'t know that\'s why we\'re going."', // https://youtu.be/JsB80oxyUYg?t=194
  ];

  constructor() { }

  getFooterQuotes(): string[] {
    return this.footerQuotes;
  }
}