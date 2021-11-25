import type { Repository, Service, Source } from './domain';

/**
 * Service for 'Source'.
 */
class SourceService implements Service {
  public sourceRepository: Repository;

  constructor(sourceRepo: Repository) {
    this.sourceRepository = sourceRepo;
  }

  /**
   * Creates a new source.
   *
   * @param source - Source with omitted '_id'
   * @returns A new source
   */
  async createSource(source: Omit<Source, '_id'>) {
    const newSource = await this.sourceRepository.createSource(source);

    return newSource;
  }
}

export default SourceService;
