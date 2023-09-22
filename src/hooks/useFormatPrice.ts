import { formatPriceFunction } from "@/utils/formatPrice";

export function useFormatPrice(price: number) {
  const formatPrice = formatPriceFunction(price);
  return formatPrice;
}
