import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";
interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div>
      <HomeLayout>{children}</HomeLayout>
    </div>
  );
};

export default layout;
