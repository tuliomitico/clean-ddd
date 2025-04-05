import { test, expect } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('create an answer', () => {
    const answer = new AnswerQuestionUseCase()

    const result = answer.execute({
        instructorId: '1',
        questionId: '1',
        content: 'Nova resposta'
    })

    expect(result).toEqual('Nova resposta')
})