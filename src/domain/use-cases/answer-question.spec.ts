import { AnswerQuestionUseCase } from "./answer-question";
import type { AnswersRepository } from "../repositories/answers-repository";
import type { Answer } from "../entities/answer";

const fakeAnswerRepository: AnswersRepository = {
  create: async function (answer: Answer) {
    return;
  },
};

test("create an answer", async () => {
  const answer = new AnswerQuestionUseCase(fakeAnswerRepository);

  const result = await answer.execute({
    instructorId: "1",
    questionId: "1",
    content: "Nova resposta",
  });

  expect(result.content).toEqual("Nova resposta");
});
