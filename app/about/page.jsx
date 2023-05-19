import Link from "next/link";

export const metadata = {
  title: "About Free Course",
};

export default function AboutPage() {
  return (
    <div>
      <h1>About CoderLife</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        consectetur, augue vitae tempus dapibus, massa eros dictum enim,
        condimentum fermentum orci lacus ac erat. Integer leo ligula, pharetra
        eget risus eu, mattis eleifend mauris. Proin dui enim, malesuada a
        posuere a, finibus eget mauris. Integer vestibulum felis sit amet nisi
        vestibulum, sed placerat dui venenatis. Mauris fermentum nulla eu
        pellentesque porta. Etiam aliquet nibh nec pulvinar mattis. Integer
        dignissim ornare lorem a consectetur. Suspendisse porttitor ante eu
        nulla rhoncus, quis tincidunt quam suscipit. Integer eget ullamcorper
        nisi, in pellentesque lorem. Fusce non imperdiet diam, a mattis nisi.
      </p>
      <Link href="/" style={{ color: "white", fontSize: 20 }}>
        Back
      </Link>
    </div>
  );
}
