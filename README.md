## Content
- Hexagonal Architecture examples
### Learning Hexagonal Architecture
- Domain vs Applicacions Services -> When we repeat the logic in application, we can extract this logic in a Domain Service like **When we find some entity to continue the logic**.
  - We are goint to reuse this logic several times.
### TODO
- [ ]Implement Slack notifications
  - [ ] Implement the strcucture on the domain layer
  - [ ] Implement the domain layer in Infraestructure
  - [ ] Use domain interface in application
  - [ ] Make fake test using the application layer and not send a real email using infraestructure layer
- [ ] Implement Managed Error in Domain Layer