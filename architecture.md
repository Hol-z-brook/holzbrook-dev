# Entity-based Folder Structure

Tentative draft of architecture

```
/pages/<entity-plural>/
  _services/
    data/
      <entity-plural>.json
      # ... (JSON files for related entities)
    logic/
      <entity>.service.ts
      # ... (Service files for related entities)
      index.ts
    endpoints/
      v1/
        <entity-plural>.api.ts
        # ... (API files for related entities)
        index.ts
      middleware/
        # ... (if any)
      index.ts
    index.ts
  client/
    api/
      fetch/
        use<Entity>.ts
        use<EntityPlural>.ts
        use<SpecificDataRequirement>.ts
        index.ts
      mutate/
        useCreate<Entity>.ts
        useUpdate<Entity>.ts
        useDelete<Entity>.ts
        use<SpecificAction>.ts
        index.ts
      index.ts
    local/
      form/
        use<FormName>State.ts
        index.ts
      reducer/
        <ReducerName>.reducer.ts
        use<ReducerName>.ts
        index.ts
      index.ts
    ui/
      cards/
        <EntitySingular>Card.astro
        index.ts
      # ... (other UI component types)
      index.ts
    index.ts
  model/
    index.ts
    utils.ts
    tests/
    # ... (other model-related files)
  routes.ts
  index.astro
  [slug].astro
```
