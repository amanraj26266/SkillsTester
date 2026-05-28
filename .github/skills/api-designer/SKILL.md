---
name: api-designer
description: >
  Use when: designing REST APIs, planning endpoints, creating API contracts, writing OpenAPI specs,
  or discussing request/response schemas. Trigger phrases — "design an API", "help with endpoints",
  "API structure", "REST design", "create API routes", "openapi schema", "api contract".
---

# API Designer Skill

Instructions for DevMentor to follow when this skill is activated.

## When to use

Activate this skill any time the user asks you to:
- Design or plan a REST API from scratch
- Define endpoints, routes, or HTTP methods for a resource
- Write or review an OpenAPI / Swagger schema
- Create request/response contracts for a service
- Discuss API versioning, pagination, or authentication strategy

Example prompts that trigger this skill:
> "design an API", "what endpoints do I need?", "help me with REST routes", "create an openapi schema", "how should I structure my API?"

## Purpose

Guide the user through designing clean, RESTful APIs following REST constraints, HTTP semantics, and industry conventions.

## Design Framework

### Phase 1 — Resource Modeling

1. Identify the **nouns** (resources) in the domain.
2. Map relationships: one-to-one, one-to-many, many-to-many.
3. Decide on resource hierarchies (nested vs flat routes).

**Rule**: URLs are nouns, HTTP methods are verbs.
```
✅  GET    /users/{id}/posts
✅  POST   /posts
❌  POST   /createPost
❌  GET    /getUserPosts?userId=123
```

### Phase 2 — HTTP Method Semantics

| Method | Semantic | Body | Idempotent | Safe |
|--------|----------|------|------------|------|
| GET    | Read | ❌ | ✅ | ✅ |
| POST   | Create | ✅ | ❌ | ❌ |
| PUT    | Replace | ✅ | ✅ | ❌ |
| PATCH  | Update | ✅ | ✅* | ❌ |
| DELETE | Remove | ❌ | ✅ | ❌ |

### Phase 3 — Status Code Contract

| Scenario | Status Code |
|----------|-------------|
| Successful read | 200 OK |
| Resource created | 201 Created + Location header |
| No content | 204 No Content |
| Bad request | 400 Bad Request |
| Unauthenticated | 401 Unauthorized |
| Forbidden | 403 Forbidden |
| Not found | 404 Not Found |
| Conflict | 409 Conflict |
| Server error | 500 Internal Server Error |

### Phase 4 — Schema Design

Always design both request AND response schemas:

```yaml
# OpenAPI 3.0 example
paths:
  /users:
    post:
      summary: Create a new user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [email, name]
              properties:
                name:
                  type: string
                  minLength: 1
                  maxLength: 100
                email:
                  type: string
                  format: email
      responses:
        '201':
          description: User created
          headers:
            Location:
              schema:
                type: string
              example: /users/abc-123
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '400':
          $ref: '#/components/responses/BadRequest'
        '409':
          $ref: '#/components/responses/Conflict'
```

### Phase 5 — Security Checklist

- [ ] Authentication: JWT Bearer / OAuth2 / API Keys
- [ ] Authorization: scope-based or role-based per endpoint
- [ ] Rate limiting headers (`X-RateLimit-Limit`, `Retry-After`)
- [ ] Input validation at every boundary
- [ ] Sensitive fields excluded from responses (passwords, tokens)
- [ ] CORS policy defined
- [ ] HTTPS enforced

## Versioning Strategy

```
/api/v1/users    ← URI versioning (most visible, recommended for breaking changes)
Accept: application/vnd.api+json;version=2   ← Header versioning (cleaner URLs)
```

## Pagination Convention

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "perPage": 20,
    "total": 243,
    "links": {
      "next": "/users?page=2",
      "prev": null
    }
  }
}
```

## Workflow Steps

1. Ask: what **domain** or **feature** are we designing an API for?
2. Run Phase 1 to identify and model resources.
3. Define all CRUD endpoints with HTTP methods.
4. Generate an OpenAPI 3.0 schema snippet.
5. Run the security checklist.
6. Suggest versioning and pagination strategy if applicable.

## Example Invocation

```
User: /api-designer
      I need an API for a blog platform with posts and comments.

DevMentor: Let's design it! I'll start by modeling your resources...
           Resources identified: User, Post, Comment, Tag
           Here's the proposed route structure...
```
