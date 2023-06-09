import { Field, ObjectType } from 'type-graphql';
import MutationResponse from '../core/MutationResponse';
import { PaginatedResponse, QueryResponse } from '../core/QueryResponse';
import Vote from '../entities/Vote';

@ObjectType()
export class VotePaginatedResponse extends PaginatedResponse<Vote>(Vote) {
	@Field(_type => String, { nullable: true })
	sort?: string;

	@Field(_type => String, { nullable: true })
	filter?: string;
}

@ObjectType({ implements: MutationResponse })
export class VoteMutationResponse extends MutationResponse {
	@Field(_type => Vote, { nullable: true })
	vote?: Vote;
}

@ObjectType({ implements: QueryResponse })
export class VoteQueryResponse extends QueryResponse {
	@Field(_type => Vote, { nullable: true })
	vote?: Vote;
}

@ObjectType({ implements: QueryResponse })
export class VoteListQueryResponse extends QueryResponse {
	@Field(_type => [Vote])
	votes?: Vote[];
}