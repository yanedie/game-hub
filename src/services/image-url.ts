// 使用本地图片不能直接输入路径，而是要用导入的方式
import noImagge from "../assets/no-image-placeholder.webp";

export default function getCroppedImageUrl(url: string) {
  if (!url) return noImagge;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}
