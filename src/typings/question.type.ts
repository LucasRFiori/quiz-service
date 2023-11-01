export interface CreateQuestionBody {
  title: String;
  answers: {
    a: String;
    b: String;
    c: String;
    d: String;
  };
  rightAnswer: "a" | "b" | "c" | "d";
}
