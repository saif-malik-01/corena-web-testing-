const Content = () => {
  return (
    <div className="md:w-1/2 mx-auto py-16 px-4">
      <h2 className="text-center text-4xl font-semibold mb-4">Refund Policy</h2>
      <p className="text-center text-gray-600 text-sm">
        Effective Date: 1 March 2025
      </p>
      <div className="mt-8 space-y-4 text-gray-800">
        <p>
          This refund and cancellation policy outlines how you can cancel or
          seek a refund for a service that you have purchased through the
          Platform. Under this policy:
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Subscription Cancellation
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Users can cancel their subscription at any time through their
            account settings.
          </li>
          <li>
            If a cancellation request is made within the first{" "}
            <strong>5 days</strong> of a paid subscription, users may be
            eligible for a refund.
          </li>
          <li>
            After 5 days, cancellations will not qualify for a refund, but users
            can continue using the Service until the end of their billing cycle.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Refund Eligibility
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Technical Issues:</strong> If the Service fails due to
            technical faults on our end and our support team cannot resolve it
            within <strong>5 business days</strong>.
          </li>
          <li>
            <strong>Billing Errors:</strong> If you were charged incorrectly, we
            will process a refund after verification.
          </li>
          <li>
            <strong>First-Time Users:</strong> If you are unsatisfied with the
            Service and request a refund within <strong>5 days</strong> of the
            initial purchase, we will review your case.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Non-Refundable Cases
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            No refunds for <strong>monthly plans</strong> after 5 days.
          </li>
          <li>
            No refunds for users who have{" "}
            <strong>violated the Terms of Service</strong>.
          </li>
          <li>
            No refunds if the Service has been <strong>used extensively</strong>
            .
          </li>
          <li>
            No refunds for{" "}
            <strong>
              missing features not yet part of the Service roadmap
            </strong>
            .
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Refund Process</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            To request a refund, contact support at{" "}
            <strong>contact@mapsily.com</strong> with issue details.
          </li>
          <li>
            Approved refunds will be credited within{" "}
            <strong>10 business days</strong> to the original payment method.
          </li>
        </ul>

        <p className="mt-6 text-gray-600">
          We reserve the right to modify this policy at any time. Continued use
          of the Service constitutes acceptance of any changes.
        </p>
      </div>
    </div>
  );
};

export default Content;
