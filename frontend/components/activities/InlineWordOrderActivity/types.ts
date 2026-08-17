export interface InlineWordOrderLine {
  id: string;
  before: string;
  answer: string;
  after: string;
  syncKey?: string;
  includeInScore?: boolean;
}

export interface InlineWordOrderActivityProps {
  step: string;
  title: string;
  description: string;
  lines: InlineWordOrderLine[];
}
