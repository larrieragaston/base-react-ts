export interface Subject {
  name: string
  teacher_id: number
  teacher: string
  is_promotable: 'S' | 'N'
  correlative: Array<string>
}
