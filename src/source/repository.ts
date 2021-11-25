import type { Repository, Source } from './domain';
import SourceModel from './schema';

/**
 * Source repository.
 */
class SourceRepository implements Repository {
  public model: typeof SourceModel;

  constructor(model: typeof SourceModel) {
    this.model = model;
  }

  /**
   * Creates a new user to be used in the source.
   *
   * @param source - Source item
   * @returns New source
   */
  async createSource(source: Omit<Source, '_id'>) {
    const newSource = await this.model.create({
      sourceId: source.sourceId,
      sourceType: source.sourceType,
      dateAdded: Date.now(),
    });

    return newSource;
  }
}

export default SourceRepository;
