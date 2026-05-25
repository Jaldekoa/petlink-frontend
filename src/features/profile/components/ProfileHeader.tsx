export default function ProfileHeader({
  profileImg,
  profileName,
  profileLocation,
}: {
  profileImg: string;
  profileName: string;
  profileLocation: string;
}) {
  return (
    <section className="flex flex-col items-center mb-stack-lg">
      <div className="relative">
        <div className="w-40 h-40 rounded-full border-4 border-secondary-container overflow-hidden shadow-lg p-1 bg-white">
          <img
            alt="User Profile"
            className="w-full h-full object-cover rounded-full"
            data-alt="A portrait of a smiling young woman with warm brown eyes and friendly expression, captured in soft, natural golden hour lighting. She has a minimalist, professional aesthetic against a soft-focus garden background. The image has a vibrant yet organic feel, consistent with a modern pet adoption platform's trustworthy and warm brand identity."
            src={profileImg}
          />
        </div>
        <div className="absolute bottom-1 right-1 bg-on-tertiary-container p-2 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform">
          <span
            className="material-symbols-outlined text-white text-sm"
            data-icon="edit"
          >
            edit
          </span>
        </div>
      </div>
      <div className="mt-stack-sm text-center">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
          {profileName}
        </h2>
        <div className="flex items-center justify-center gap-1 text-on-surface-variant">
          <span
            className="material-symbols-outlined text-sm"
            data-icon="location_on"
          >
            location_on
          </span>
          <span className="font-body-sm text-body-sm">{profileLocation}</span>
        </div>
      </div>
    </section>
  );
}
