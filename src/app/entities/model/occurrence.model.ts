export class Occurrence {
  constructor(
    public id?: number,
    public latitude?: number,
    public longitude?: number,
    public location?: string,
    public name?: string,
    public description?: string,
    public status?: string,
    public occurrenceType?: string,
    public occurrenceUrgencyLevel ?: string,
    public active  ?: boolean
  ) {
  }
}


