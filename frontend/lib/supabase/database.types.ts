export type Database = {
  public: {
    Tables: {
      user_song_learning: {
        Row: {
          completed_at: string | null;
          homework_answer: string;
          is_favorite: boolean;
          last_opened_at: string;
          progress_percent: number;
          score_correct: number | null;
          score_total: number | null;
          song_slug: string;
          started_at: string;
          student_name: string;
          teacher_name: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          completed_at?: string | null;
          homework_answer?: string;
          is_favorite?: boolean;
          last_opened_at?: string;
          progress_percent?: number;
          score_correct?: number | null;
          score_total?: number | null;
          song_slug: string;
          started_at?: string;
          student_name?: string;
          teacher_name?: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          completed_at?: string | null;
          homework_answer?: string;
          is_favorite?: boolean;
          last_opened_at?: string;
          progress_percent?: number;
          score_correct?: number | null;
          score_total?: number | null;
          song_slug?: string;
          started_at?: string;
          student_name?: string;
          teacher_name?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
