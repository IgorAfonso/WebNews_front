import FindDiscutionsComponent from "@/components/CommunityComponents/FindComponent";
import PostStatitcs from "@/components/CommunityComponents/PostStatitcs";
import NewPosts from "@/components/CommunityComponents/RecentArticles";
import Footer from "@/components/DefaultFooterComponent/Footer";
import GeneralHeader from "@/components/DefaultHeaderComponent/GeneralHeader";

export default function CommunityPage() {
  return (
    <div>
      <GeneralHeader PageDescriptor="Comunidade" />
      <div className="bg-accent">
        <FindDiscutionsComponent />
      </div>
      <PostStatitcs />
      <NewPosts />
      <Footer />
    </div>
  );
}
