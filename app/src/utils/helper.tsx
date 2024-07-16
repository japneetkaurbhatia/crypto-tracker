import { format } from 'date-fns';

export const formatPrice = (price: number | undefined): string => {
    if (price === undefined) {
      return '';
    }
  
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
  }


  export const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);
  return format(date, 'dd-MM-yyyy HH:mm:ss');
}