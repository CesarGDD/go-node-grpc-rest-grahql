/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'blogpb';

export interface Blog {
  id: number;
  userId: number;
  content: string;
}

export interface CreateBlogRequest {
  userId: number;
  content: string;
}

export interface CreateBlogResponse {
  blog: Blog | undefined;
}

export interface DeleteBlogRequest {
  id: number;
}

export interface DeleteBlogResponse {
  blog: Blog | undefined;
}

export interface GetBlogRequest {
  id: number;
}

export interface GetBlogResponse {
  blog: Blog | undefined;
}

export interface GetBlogByUserIdRequest {
  userId: number;
}

export interface GetBlogByUserIdResponse {
  blog: Blog[];
}

export interface GetBlogsRequest {}

export interface GetBlogsResponse {
  blog: Blog[];
}

function createBaseBlog(): Blog {
  return { id: 0, userId: 0, content: '' };
}

export const Blog = {
  encode(message: Blog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.userId !== 0) {
      writer.uint32(16).int32(message.userId);
    }
    if (message.content !== '') {
      writer.uint32(26).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Blog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.userId = reader.int32();
          break;
        case 3:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Blog {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      content: isSet(object.content) ? String(object.content) : '',
    };
  },

  toJSON(message: Blog): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Blog>, I>>(object: I): Blog {
    const message = createBaseBlog();
    message.id = object.id ?? 0;
    message.userId = object.userId ?? 0;
    message.content = object.content ?? '';
    return message;
  },
};

function createBaseCreateBlogRequest(): CreateBlogRequest {
  return { userId: 0, content: '' };
}

export const CreateBlogRequest = {
  encode(
    message: CreateBlogRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int32(message.userId);
    }
    if (message.content !== '') {
      writer.uint32(18).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBlogRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBlogRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.int32();
          break;
        case 2:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateBlogRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      content: isSet(object.content) ? String(object.content) : '',
    };
  },

  toJSON(message: CreateBlogRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBlogRequest>, I>>(
    object: I,
  ): CreateBlogRequest {
    const message = createBaseCreateBlogRequest();
    message.userId = object.userId ?? 0;
    message.content = object.content ?? '';
    return message;
  },
};

function createBaseCreateBlogResponse(): CreateBlogResponse {
  return { blog: undefined };
}

export const CreateBlogResponse = {
  encode(
    message: CreateBlogResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.blog !== undefined) {
      Blog.encode(message.blog, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBlogResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBlogResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blog = Blog.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateBlogResponse {
    return {
      blog: isSet(object.blog) ? Blog.fromJSON(object.blog) : undefined,
    };
  },

  toJSON(message: CreateBlogResponse): unknown {
    const obj: any = {};
    message.blog !== undefined &&
      (obj.blog = message.blog ? Blog.toJSON(message.blog) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBlogResponse>, I>>(
    object: I,
  ): CreateBlogResponse {
    const message = createBaseCreateBlogResponse();
    message.blog =
      object.blog !== undefined && object.blog !== null
        ? Blog.fromPartial(object.blog)
        : undefined;
    return message;
  },
};

function createBaseDeleteBlogRequest(): DeleteBlogRequest {
  return { id: 0 };
}

export const DeleteBlogRequest = {
  encode(
    message: DeleteBlogRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBlogRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBlogRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBlogRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: DeleteBlogRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBlogRequest>, I>>(
    object: I,
  ): DeleteBlogRequest {
    const message = createBaseDeleteBlogRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseDeleteBlogResponse(): DeleteBlogResponse {
  return { blog: undefined };
}

export const DeleteBlogResponse = {
  encode(
    message: DeleteBlogResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.blog !== undefined) {
      Blog.encode(message.blog, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteBlogResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteBlogResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blog = Blog.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteBlogResponse {
    return {
      blog: isSet(object.blog) ? Blog.fromJSON(object.blog) : undefined,
    };
  },

  toJSON(message: DeleteBlogResponse): unknown {
    const obj: any = {};
    message.blog !== undefined &&
      (obj.blog = message.blog ? Blog.toJSON(message.blog) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBlogResponse>, I>>(
    object: I,
  ): DeleteBlogResponse {
    const message = createBaseDeleteBlogResponse();
    message.blog =
      object.blog !== undefined && object.blog !== null
        ? Blog.fromPartial(object.blog)
        : undefined;
    return message;
  },
};

function createBaseGetBlogRequest(): GetBlogRequest {
  return { id: 0 };
}

export const GetBlogRequest = {
  encode(
    message: GetBlogRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlogRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlogRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlogRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: GetBlogRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBlogRequest>, I>>(
    object: I,
  ): GetBlogRequest {
    const message = createBaseGetBlogRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGetBlogResponse(): GetBlogResponse {
  return { blog: undefined };
}

export const GetBlogResponse = {
  encode(
    message: GetBlogResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.blog !== undefined) {
      Blog.encode(message.blog, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlogResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlogResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blog = Blog.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlogResponse {
    return {
      blog: isSet(object.blog) ? Blog.fromJSON(object.blog) : undefined,
    };
  },

  toJSON(message: GetBlogResponse): unknown {
    const obj: any = {};
    message.blog !== undefined &&
      (obj.blog = message.blog ? Blog.toJSON(message.blog) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBlogResponse>, I>>(
    object: I,
  ): GetBlogResponse {
    const message = createBaseGetBlogResponse();
    message.blog =
      object.blog !== undefined && object.blog !== null
        ? Blog.fromPartial(object.blog)
        : undefined;
    return message;
  },
};

function createBaseGetBlogByUserIdRequest(): GetBlogByUserIdRequest {
  return { userId: 0 };
}

export const GetBlogByUserIdRequest = {
  encode(
    message: GetBlogByUserIdRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int32(message.userId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetBlogByUserIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlogByUserIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlogByUserIdRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: GetBlogByUserIdRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBlogByUserIdRequest>, I>>(
    object: I,
  ): GetBlogByUserIdRequest {
    const message = createBaseGetBlogByUserIdRequest();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseGetBlogByUserIdResponse(): GetBlogByUserIdResponse {
  return { blog: [] };
}

export const GetBlogByUserIdResponse = {
  encode(
    message: GetBlogByUserIdResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.blog) {
      Blog.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetBlogByUserIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlogByUserIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blog.push(Blog.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlogByUserIdResponse {
    return {
      blog: Array.isArray(object?.blog)
        ? object.blog.map((e: any) => Blog.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetBlogByUserIdResponse): unknown {
    const obj: any = {};
    if (message.blog) {
      obj.blog = message.blog.map((e) => (e ? Blog.toJSON(e) : undefined));
    } else {
      obj.blog = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBlogByUserIdResponse>, I>>(
    object: I,
  ): GetBlogByUserIdResponse {
    const message = createBaseGetBlogByUserIdResponse();
    message.blog = object.blog?.map((e) => Blog.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetBlogsRequest(): GetBlogsRequest {
  return {};
}

export const GetBlogsRequest = {
  encode(
    _: GetBlogsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlogsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlogsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetBlogsRequest {
    return {};
  },

  toJSON(_: GetBlogsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBlogsRequest>, I>>(
    _: I,
  ): GetBlogsRequest {
    const message = createBaseGetBlogsRequest();
    return message;
  },
};

function createBaseGetBlogsResponse(): GetBlogsResponse {
  return { blog: [] };
}

export const GetBlogsResponse = {
  encode(
    message: GetBlogsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.blog) {
      Blog.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlogsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlogsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blog.push(Blog.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlogsResponse {
    return {
      blog: Array.isArray(object?.blog)
        ? object.blog.map((e: any) => Blog.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetBlogsResponse): unknown {
    const obj: any = {};
    if (message.blog) {
      obj.blog = message.blog.map((e) => (e ? Blog.toJSON(e) : undefined));
    } else {
      obj.blog = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBlogsResponse>, I>>(
    object: I,
  ): GetBlogsResponse {
    const message = createBaseGetBlogsResponse();
    message.blog = object.blog?.map((e) => Blog.fromPartial(e)) || [];
    return message;
  },
};

export interface BlogService {
  CreateBlog(request: CreateBlogRequest): Promise<CreateBlogResponse>;
  DeleteBlog(request: DeleteBlogRequest): Promise<DeleteBlogResponse>;
  GetBlog(request: GetBlogRequest): Promise<GetBlogResponse>;
  GetBlogByUserId(
    request: GetBlogByUserIdRequest,
  ): Promise<GetBlogByUserIdResponse>;
  GetBlogs(request: GetBlogsRequest): Promise<GetBlogsResponse>;
}

export class BlogServiceClientImpl implements BlogService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateBlog = this.CreateBlog.bind(this);
    this.DeleteBlog = this.DeleteBlog.bind(this);
    this.GetBlog = this.GetBlog.bind(this);
    this.GetBlogByUserId = this.GetBlogByUserId.bind(this);
    this.GetBlogs = this.GetBlogs.bind(this);
  }
  CreateBlog(request: CreateBlogRequest): Promise<CreateBlogResponse> {
    const data = CreateBlogRequest.encode(request).finish();
    const promise = this.rpc.request('blogpb.BlogService', 'CreateBlog', data);
    return promise.then((data) =>
      CreateBlogResponse.decode(new _m0.Reader(data)),
    );
  }

  DeleteBlog(request: DeleteBlogRequest): Promise<DeleteBlogResponse> {
    const data = DeleteBlogRequest.encode(request).finish();
    const promise = this.rpc.request('blogpb.BlogService', 'DeleteBlog', data);
    return promise.then((data) =>
      DeleteBlogResponse.decode(new _m0.Reader(data)),
    );
  }

  GetBlog(request: GetBlogRequest): Promise<GetBlogResponse> {
    const data = GetBlogRequest.encode(request).finish();
    const promise = this.rpc.request('blogpb.BlogService', 'GetBlog', data);
    return promise.then((data) => GetBlogResponse.decode(new _m0.Reader(data)));
  }

  GetBlogByUserId(
    request: GetBlogByUserIdRequest,
  ): Promise<GetBlogByUserIdResponse> {
    const data = GetBlogByUserIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      'blogpb.BlogService',
      'GetBlogByUserId',
      data,
    );
    return promise.then((data) =>
      GetBlogByUserIdResponse.decode(new _m0.Reader(data)),
    );
  }

  GetBlogs(request: GetBlogsRequest): Promise<GetBlogsResponse> {
    const data = GetBlogsRequest.encode(request).finish();
    const promise = this.rpc.request('blogpb.BlogService', 'GetBlogs', data);
    return promise.then((data) =>
      GetBlogsResponse.decode(new _m0.Reader(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
