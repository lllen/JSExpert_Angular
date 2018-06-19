import { ActorCatalogModule } from './actor-catalog.module';

describe('ActorCatalogModule', () => {
  let actorCatalogModule: ActorCatalogModule;

  beforeEach(() => {
    actorCatalogModule = new ActorCatalogModule();
  });

  it('should create an instance', () => {
    expect(actorCatalogModule).toBeTruthy();
  });
});
