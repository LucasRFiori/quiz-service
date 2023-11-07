export interface CreateQuestionBody {
  video_url: String;
  answers: {
    a: String;
    b: String;
    c: String;
    d: String;
  };
  rightAnswer: "a" | "b" | "c" | "d";
}
