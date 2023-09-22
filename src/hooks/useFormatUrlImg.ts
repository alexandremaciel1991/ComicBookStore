export function useFormatUrlImg(url: string, extension: string) {
  const img = url + "." + extension;
  return img;
}
