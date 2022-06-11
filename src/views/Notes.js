import React from "react";
import { Button } from "components/atoms/Button/Button";
import Note from "components/molecules/Note/Note";
import { useAddNoteMutation, useGetNotesQuery } from "store";
import {
  FormWrapper,
  NotesWrapper,
  StyledFormField,
  Wrapper,
} from "views/Notes.styles";
import { useForm } from "react-hook-form";

const redesigned = {
  width: "100%",
  "max-width": "120px",
  "align-self": "flex-end",
  color: "#ffffff",
  "background-color": "#000",
  background: "linear-gradient(#f06 40%, #d91918)",
  "border-radius": "32px",
  margin: "0",
  padding: "16px 40px",
  border: "2px solid #fff",
};

const Notes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data, isLoading } = useGetNotesQuery();
  const [addNote] = useAddNoteMutation();

  const handleAddNote = ({ title, content }) => {
    addNote({ title, content });
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField
          {...register("title", { required: true })}
          label="Title"
          name="title"
          id="title"
        />
        <StyledFormField
          {...register("content", { required: true })}
          isTextarea
          label="Content"
          name="content"
          id="content"
        />
        {errors.title && <span>Title is required</span>}
        {errors.content && <span>Content is required</span>}
        <Button style={redesigned} type="submit">
          Add
        </Button>
      </FormWrapper>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ title, content, id }) => (
              <Note id={id} key={id} title={title} content={content} />
            ))
          ) : (
            <p>Create your first note</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default Notes;
