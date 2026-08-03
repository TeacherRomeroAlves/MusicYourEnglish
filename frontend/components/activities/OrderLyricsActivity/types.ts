export interface OrderItem {
    id: string;
    text: string;
}
  
export interface OrderLyricsActivityProps {
    step: string;
    title: string;
    description?: string;
    items: OrderItem[];
}