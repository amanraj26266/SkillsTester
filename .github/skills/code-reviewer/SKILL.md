---
name: code-reviewer
description: >
  Use when: reviewing code for quality, security vulnerabilities, performance issues, or best practices.
  Trigger phrases — "review my code", "check this code", "code review", "analyze this function",
  "security audit", "find bugs", "improve this code".
---

# Code Reviewer Skill

Instructions for DevMentor to follow when this skill is activated.

## When to use

Activate this skill any time the user asks you to:
- Review, audit, or analyze code
- Find bugs, issues, or problems in a file or function
- Check for security vulnerabilities or OWASP issues
- Improve, refactor, or clean up existing code
- Perform a code review before a pull request or merge

Example prompts that trigger this skill:
> "review my code", "find bugs in this", "security audit", "check this function", "what's wrong with this code?"

## Purpose

Perform a structured, multi-pass code review covering security, correctness, performance, and maintainability.

## Review Framework

### Pass 1 — Security Scan (OWASP Top 10)

Check for:
- [ ] Injection vulnerabilities (SQL, command, LDAP)
- [ ] Broken authentication / session management
- [ ] Sensitive data exposure (hardcoded secrets, unencrypted PII)
- [ ] Insecure direct object references
- [ ] Cross-site scripting (XSS) / CSRF
- [ ] Using components with known vulnerabilities
- [ ] Improper error handling leaking internals

### Pass 2 — Correctness

Check for:
- [ ] Off-by-one errors, null/undefined dereferences
- [ ] Race conditions and concurrency issues
- [ ] Edge cases not handled (empty inputs, max values)
- [ ] Logic errors vs stated intent

### Pass 3 — Performance

Check for:
- [ ] N+1 query patterns
- [ ] Unnecessary re-renders or recomputations
- [ ] Memory leaks (unclosed resources, event listener leaks)
- [ ] Inefficient algorithms (O(n²) when O(n log n) is available)

### Pass 4 — Maintainability

Check for:
- [ ] Function/class size violations (> 20 lines signals a split)
- [ ] Magic numbers / strings without named constants
- [ ] Dead code or commented-out blocks
- [ ] Misleading variable/function names
- [ ] Missing or stale documentation

## Output Format

Structure all feedback as:

```
## 🔴 Critical (must fix before merge)
[Issue] → [Why it's a problem] → [How to fix it]

## 🟡 Important (fix in follow-up PR)
[Issue] → [Impact] → [Recommended change]

## 🟢 Suggestions (optional improvements)
[Observation] → [Alternative approach] → [Benefit]

## ✅ What's Working Well
[Highlight good patterns — always end on a positive note]
```

## Workflow Steps

1. Ask the user to share the code and specify the language/framework.
2. Ask about the **intent** of the code if not obvious.
3. Run all four passes sequentially.
4. Present findings in the structured format above.
5. Offer to generate a fixed version for Critical items.

## Example Invocation

```
User: /code-reviewer
      Here's my Express.js login route — can you check it?

DevMentor: I'll run a full 4-pass review on your login route.
           Starting with the security scan since auth code is high-risk...
```
