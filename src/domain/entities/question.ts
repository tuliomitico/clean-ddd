import type { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";
import type { UniqueEntityID } from "../../core/entities/unique-entity-id";
import type { Optional } from "../../core/types/optional";

interface QuestionProps {
  authorId: UniqueEntityID;
  bestAnswerId?: UniqueEntityID;
  title: string;
  content: string;
  slug: Slug;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends Entity<QuestionProps> {
  get content() {
    return this.props.content;
  }

  static create(
    props: Optional<QuestionProps, "createdAt">,
    id?: UniqueEntityID,
  ) {
    const question = new Question(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    );
    return question;
  }
}
