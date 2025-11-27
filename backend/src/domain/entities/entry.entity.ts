export class Entry {
  constructor(
    public id: string,
    public startDate: Date,
    public endDate?: Date,
    public description?: string
  ) {
  }
}
