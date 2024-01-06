import React from "react";

const page = () => {
  const policyContent = [
    "Candidates must be eligible to work in India per the Government of India guidelines.",
    "Remote Internship, provided by IQSchool, is mandatory for every candidate in the Placement Guarantee program. After completing the projects/internship, Placement Guarantee will apply to the candidate.",
    "Candidates must complete at least 85% of the given assignments/projects/etc. In the program, they are issued grades in assignments/projects/etc. It should be >=85% to avail of the Placement Guarantee.",
    "We provide a Placement Guarantee, given that the candidate ensures that all required Program assignments and submissions are completed within the stipulated period (8 months from the start date). Grades will be calculated based on the following:",
    "a. Assignment Submission",
    "b. Projects Submission",
    "Kindly ensure that no plagiarism is found in any assignments/projects. It will make the submissions invalid, after which the candidate will be subjected to resubmitting.",
    "Candidates can avail themselves of facilities such as interview preparation & resume preparation only if they follow the instructions above.",
    "Candidates are supposed to complete their projects to apply for the opportunities provided to them as part of the Placement Guaranteed program. Failure to complete the projects will result in candidates not getting interview opportunities.",
    "There should be at most two years of career gap in the candidate's profile.",
    "IQSchool will refer the candidates to companies for interviews only with the candidate's prior consent, in any case, if the candidate is unwilling or fails to attend the interview. They will not be applicable to claim the refund, and IQSchool will have all the rights to deny any other interview opportunity.",
    "IQSchool will refer you to various product-based, service-based, or startup companies.",
    "After ensuring the Job, you are supposed to pass all the background verification as prescribed by the employer; in case of any lapse in verification, IQSchool holds no responsibility.",
  ];

  const refundPolicyContent = [
    "A Trainee is eligible for total fee refund (excluding GST) if he/she wants to quit the Training within 7 days of commencement of the program.",
    "A Trainee is eligible for 100% refund of Placement charges (excluding GST), if the company is not able to provide placement within 12 months of commencement of the Training program. In case of Training period extension, the validity of the placement period also extends accordingly.",
  ];

  const refundNotApplicableContent = [
    "After completion of 7 working days from the start of the Training program, there is no scope for refund.",
    "When a Trainee doesn't comply with company norms in terms of securing a minimum score of 85% in the Internal Assessments done.",
    "When a Trainee doesn't manage the minimum Attendance of 90% requirement as per the program guidelines.",
    "Even if the Trainee secures a job through an external source, during or after the Training Period, there is no scope for a refund.",
    "Any kind of disciplinary or behavioral issues being noticed, leading to the inconvenience of other students or training in general, there is no scope for a refund.",
  ];
  return (
    <div className="container mx-auto p-6 bg-gray-100 shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Placement Guarantee - Privacy Policy
      </h1>
      <div className="prose max-w-full">
        <h2 className="text-2xl mb-4">Placement Guarantee</h2>
        <p>
          Placement Guarantee terms and conditions apply only in those Programs
          mentioned exclusively as Placement Guarantee program irrespective of
          the technology. So long as the name suggests it is a Placement
          Guarantee program, the terms and conditions below will follow. And
          each candidate must ensure that all the terms and conditions are
          followed respectively to avail of the services mentioned.
        </p>

        <h2 className="text-2xl mt-4">
          Terms and Conditions for Placement Guarantee
        </h2>
        <p className="mt-4">
          This program offers Placement Guarantee to participants subjected to
          specific terms and conditions mentioned below. If you disagree with
          our terms & conditions, you will not be applicable for the Placement
          Guarantee. The materials are secured by relevant copyright and
          trademark law. (Re-distributing or re-selling without permission is an
          offense that can lead to strict legal action)
        </p>

        <div className="container mx-auto p-6 bg-gray-100 shadow-md rounded-md">
          <div className="prose max-w-full">
            {policyContent.map((item, index) => (
              <p key={index} className="mb-4">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6 bg-gray-100 shadow-md rounded-md mt-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Refund Policy</h1>

        <div className="prose max-w-full">
          <h2 className="text-2xl mb-4">
            Placement Guarantee terms and conditions
          </h2>
          <p>
            Placement Guarantee terms and conditions apply only in those
            Programs mentioned exclusively as Placement Guarantee program”
            irrespective of the technology. So long as the name suggests it is a
            Placement Guarantee program, the terms and conditions below will
            follow. And each candidate must ensure that all the terms and
            conditions are followed respectively to avail of the services
            mentioned.
          </p>

          <h2 className="text-2xl mb-4">
            Terms and Conditions for Refund Policy
          </h2>
          {refundPolicyContent.map((item, index) => (
            <p key={index} className="mb-4">
              {item}
            </p>
          ))}

          <h2 className="text-2xl mb-4">When Refund is not applicable</h2>
          {refundNotApplicableContent.map((item, index) => (
            <p key={index} className="mb-4">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
