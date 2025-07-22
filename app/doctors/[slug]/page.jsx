import BackButton from "@/components/Buttons/BackBUtton";
import doctors from "@/data/doctors";
import Image from "next/image";

export async function generateStaticParams() {
  return doctors.map((doctor) => ({
    slug: doctor.slug,
  }));
}

export default async function DoctorPage({ params }) {
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const doctor = doctors.find((d) => d.slug === params.slug);

  if (!doctor)
    return <div className="text-center text-lg py-10">Doctor not found.</div>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Doctor Image */}
      <div className="w-full h-auto flex justify-center items-start">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={400}
          height={400}
          className="rounded-xl object-cover shadow-md"
        />
      </div>

      {/* Doctor Info */}
      <div className="lg:col-span-2 space-y-5">
        <h1 className="text-4xl font-bold text-gray-900">{doctor.name}</h1>
        <p className="text-lg text-primary-600 font-semibold">
          {doctor.specialty}
        </p>
        <p className="text-md text-gray-700 font-medium">{doctor.medicalEdu}</p>

        {/* Bio Paragraphs */}
        <div className="space-y-3 text-gray-700 leading-relaxed text-[1rem]">
          {Object.values(doctor.bio).map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Languages Spoken</h2>
          <div className="flex flex-wrap gap-2">
            {doctor.language.map((lang, index) => (
              <span
                key={index}
                className="inline-block bg-primary-100 text-primary-900 text-sm font-medium px-3 py-1 rounded-full border border-primary-300"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Areas of Work */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Areas of Work</h2>
          <div className="flex flex-wrap gap-2">
            {doctor.areasOfWork.map((area, index) => (
              <span
                key={index}
                className="inline-block bg-primary-100 text-primary-900 text-sm font-medium px-3 py-1 rounded-full border border-primary-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <BackButton />
      </div>
    </div>
  );
}
