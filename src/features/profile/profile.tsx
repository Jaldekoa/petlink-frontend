import MenuNavigationGrid from "./components/MenuNavigationGrid";
import ProfileHeader from "./components/ProfileHeader";

export default function Profile() {
  return (
    <>
      <main className="flex-grow pt-24 pb-32 px-margin-mobile max-w-7xl mx-auto w-full">
        <ProfileHeader
          profileImg="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ-JSE5wW462cJzhtZwDHn6afzzyrE3IxiFspqBlijsDYFwFkI1f1wVP_3pqJpXxTVi3P0eTBsuzw7J02g238pQ1yFyCK1r6fTClg--vw7TKiqIHJ2uqgdZ_ugA0W48U5u-fr4yxuMZuUwn_zYIy57A7hGcR1B4OfTtulIi5OugDQd1rU6msIchcCpF5N9kL3sUTQERfvRjCQROZeR_h8VjBREF99dHQYkibyRuHt4IhEZXhthm9uPbgraHlV4xvWIIFbA3LhL2vJw"
          profileName="María García"
          profileLocation="Madrid, España"
        />
        <MenuNavigationGrid />
      </main>
    </>
  );
}
