import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  ingredients: Array<Ingredient>;
  ingredient?: Maybe<Ingredient>;
  me?: Maybe<User>;
  login: UserResponse;
};


export type QueryIngredientArgs = {
  id: Scalars['Int'];
};


export type QueryLoginArgs = {
  options: UsernamePasswordInput;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  ingredientId: Scalars['Int'];
  ingredientName: Scalars['String'];
  tsCreated: Scalars['String'];
  tsLastChange: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  userId: Scalars['Int'];
  username: Scalars['String'];
  tsCreated: Scalars['String'];
  tsLastChange: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createIngredient: Ingredient;
  updateIngredient?: Maybe<Ingredient>;
  deleteIngredient: Scalars['Boolean'];
  register: UserResponse;
};


export type MutationCreateIngredientArgs = {
  name: Scalars['String'];
};


export type MutationUpdateIngredientArgs = {
  name: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteIngredientArgs = {
  id: Scalars['Int'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'username'>
    )> }
  ) }
);


export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!) {
  register(options: {username: $username, password: $password}) {
    errors {
      field
      message
    }
    user {
      userId
      username
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};