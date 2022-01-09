import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Auth = {
  __typename?: 'Auth';
  access_token: Scalars['String'];
};

export type Author = {
  __typename?: 'Author';
  _id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  posts: Array<Maybe<Post>>;
};

export type CreateAuthorInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type CreateDestinationInput = {
  description: Scalars['String'];
  maxSlots: Scalars['Float'];
  name: Scalars['String'];
};

export type CreateMemberInput = {
  birthday?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emergencyContactEmailAddress?: InputMaybe<Scalars['String']>;
  emergencyContactName?: InputMaybe<Scalars['String']>;
  emergencyContactNumber?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type CreatePostInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateReservationInput = {
  hikeDateEnd: Scalars['DateTime'];
  hikeDateStart: Scalars['DateTime'];
  leader: CreateMemberInput;
  members: Array<CreateMemberInput>;
  reservationStatus?: InputMaybe<Status>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type DestinationConnection = NodeConnection & {
  __typename?: 'DestinationConnection';
  nodes: Array<DestinationEntity>;
  totalCount: Scalars['Int'];
};

export type DestinationEntity = Node & {
  __typename?: 'DestinationEntity';
  _id: Scalars['ID'];
  description: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  maxSlots: Scalars['Float'];
  name: Scalars['String'];
  slotsLeft: Scalars['Float'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MemberConnection = NodeConnection & {
  __typename?: 'MemberConnection';
  nodes: Array<MemberEntity>;
  totalCount: Scalars['Int'];
};

export type MemberEntity = Node & {
  __typename?: 'MemberEntity';
  _id: Scalars['ID'];
  birthday?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emergencyContactEmailAddress?: Maybe<Scalars['String']>;
  emergencyContactName?: Maybe<Scalars['String']>;
  emergencyContactNumber?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Author;
  createDestination: DestinationEntity;
  createMember: MemberEntity;
  createPost: Post;
  createReservation: ReservationEntity;
  createUser: User;
  echo: Scalars['String'];
  login: Auth;
  removeAuthor: Author;
  removeDestination: DestinationEntity;
  removeMember: MemberEntity;
  removePost: Post;
  removeReservation: ReservationEntity;
  removeUser: User;
  updateAuthor: Author;
  updateDestination: DestinationEntity;
  updateMember: MemberEntity;
  updatePost: Post;
  updateReservation: ReservationEntity;
  updateReservationStatus: ReservationEntity;
  updateUser: User;
};


export type MutationCreateAuthorArgs = {
  createAuthorInput: CreateAuthorInput;
};


export type MutationCreateDestinationArgs = {
  createDestinationInput: CreateDestinationInput;
};


export type MutationCreateMemberArgs = {
  createMemberInput: CreateMemberInput;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreateReservationArgs = {
  createReservationInput: CreateReservationInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationEchoArgs = {
  message: Scalars['String'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveAuthorArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveDestinationArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveMemberArgs = {
  _id: Scalars['String'];
};


export type MutationRemovePostArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveReservationArgs = {
  _id: Scalars['ID'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateAuthorArgs = {
  updateAuthorInput: UpdateAuthorInput;
};


export type MutationUpdateDestinationArgs = {
  updateDestinationInput: UpdateDestinationInput;
};


export type MutationUpdateMemberArgs = {
  updateMemberInput: UpdateMemberInput;
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};


export type MutationUpdateReservationArgs = {
  updateReservationInput: UpdateReservationInput;
};


export type MutationUpdateReservationStatusArgs = {
  _id: Scalars['ID'];
  status: Status;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Node = {
  _id: Scalars['ID'];
};

export type NodeConnection = {
  totalCount: Scalars['Int'];
};

export type Post = Node & {
  __typename?: 'Post';
  _id: Scalars['ID'];
  authorId: Scalars['ID'];
  isPublished: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  author: Author;
  destination: DestinationEntity;
  destinations: DestinationConnection;
  member: MemberEntity;
  members: MemberConnection;
  ping: Scalars['String'];
  post: Post;
  posts: Array<Post>;
  reservation: ReservationEntity;
  reservations: ReservationConnection;
  userById: User;
  users: Array<User>;
  whoAmI: User;
};


export type QueryAuthorArgs = {
  id: Scalars['Int'];
};


export type QueryDestinationArgs = {
  id: Scalars['Int'];
};


export type QueryMemberArgs = {
  _id: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QueryReservationArgs = {
  _id: Scalars['ID'];
};


export type QueryUserByIdArgs = {
  id: Scalars['String'];
};

export type ReservationConnection = NodeConnection & {
  __typename?: 'ReservationConnection';
  nodes: Array<ReservationEntity>;
  totalCount: Scalars['Int'];
};

export type ReservationEntity = Node & {
  __typename?: 'ReservationEntity';
  _id: Scalars['ID'];
  hikeDateEnd: Scalars['DateTime'];
  hikeDateStart: Scalars['DateTime'];
  leader: MemberEntity;
  members: Array<MemberEntity>;
  reservationStatus: Status;
};

export enum Status {
  Approved = 'Approved',
  Cancelled = 'Cancelled',
  Declined = 'Declined',
  Pending = 'Pending'
}

export type UpdateAuthorInput = {
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: InputMaybe<Scalars['String']>;
};

export type UpdateDestinationInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  maxSlots?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateMemberInput = {
  _id: Scalars['ID'];
  birthday?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emergencyContactEmailAddress?: InputMaybe<Scalars['String']>;
  emergencyContactName?: InputMaybe<Scalars['String']>;
  emergencyContactNumber?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type UpdatePostInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateReservationInput = {
  _id: Scalars['ID'];
  hikeDateEnd?: InputMaybe<Scalars['DateTime']>;
  hikeDateStart?: InputMaybe<Scalars['DateTime']>;
  leader?: InputMaybe<CreateMemberInput>;
  members?: InputMaybe<Array<CreateMemberInput>>;
  reservationStatus?: InputMaybe<Status>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type User = Node & {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type DestinationsQueryVariables = Exact<{ [key: string]: never; }>;


export type DestinationsQuery = { __typename?: 'Query', destinations: { __typename?: 'DestinationConnection', totalCount: number, nodes: Array<{ __typename?: 'DestinationEntity', _id: string, name: string, description: string, maxSlots: number, slotsLeft: number, imageUrl?: string | null | undefined }> } };

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };

export type WhoAmIQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmIQuery = { __typename?: 'Query', whoAmI: { __typename?: 'User', _id: string, firstName: string, lastName: string, email: string } };


export const DestinationsDocument = gql`
    query Destinations {
  destinations {
    totalCount
    nodes {
      _id
      name
      description
      maxSlots
      slotsLeft
      imageUrl
    }
  }
}
    `;

/**
 * __useDestinationsQuery__
 *
 * To run a query within a React component, call `useDestinationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDestinationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDestinationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDestinationsQuery(baseOptions?: Apollo.QueryHookOptions<DestinationsQuery, DestinationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DestinationsQuery, DestinationsQueryVariables>(DestinationsDocument, options);
      }
export function useDestinationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DestinationsQuery, DestinationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DestinationsQuery, DestinationsQueryVariables>(DestinationsDocument, options);
        }
export type DestinationsQueryHookResult = ReturnType<typeof useDestinationsQuery>;
export type DestinationsLazyQueryHookResult = ReturnType<typeof useDestinationsLazyQuery>;
export type DestinationsQueryResult = Apollo.QueryResult<DestinationsQuery, DestinationsQueryVariables>;
export const PingDocument = gql`
    query Ping {
  ping
}
    `;

/**
 * __usePingQuery__
 *
 * To run a query within a React component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePingQuery(baseOptions?: Apollo.QueryHookOptions<PingQuery, PingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PingQuery, PingQueryVariables>(PingDocument, options);
      }
export function usePingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PingQuery, PingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PingQuery, PingQueryVariables>(PingDocument, options);
        }
export type PingQueryHookResult = ReturnType<typeof usePingQuery>;
export type PingLazyQueryHookResult = ReturnType<typeof usePingLazyQuery>;
export type PingQueryResult = Apollo.QueryResult<PingQuery, PingQueryVariables>;
export const WhoAmIDocument = gql`
    query WhoAmI {
  whoAmI {
    _id
    firstName
    lastName
    email
  }
}
    `;

/**
 * __useWhoAmIQuery__
 *
 * To run a query within a React component, call `useWhoAmIQuery` and pass it any options that fit your needs.
 * When your component renders, `useWhoAmIQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWhoAmIQuery({
 *   variables: {
 *   },
 * });
 */
export function useWhoAmIQuery(baseOptions?: Apollo.QueryHookOptions<WhoAmIQuery, WhoAmIQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WhoAmIQuery, WhoAmIQueryVariables>(WhoAmIDocument, options);
      }
export function useWhoAmILazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WhoAmIQuery, WhoAmIQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WhoAmIQuery, WhoAmIQueryVariables>(WhoAmIDocument, options);
        }
export type WhoAmIQueryHookResult = ReturnType<typeof useWhoAmIQuery>;
export type WhoAmILazyQueryHookResult = ReturnType<typeof useWhoAmILazyQuery>;
export type WhoAmIQueryResult = Apollo.QueryResult<WhoAmIQuery, WhoAmIQueryVariables>;