import { Header } from "@/components/Header";
import { NotificationArea } from "@/components/NotificationArea";
import { CourseInfoCard } from "@/components/CourseInfoCard";
import { CourseDetailsGrid } from "@/components/CourseDetailsGrid";
import { DiscountCodeSection } from "@/components/DiscountCodeSection";
import { PaymentMethodSection } from "@/components/PaymentMethodSection";
import { PurchaseSummaryCard } from "@/components/PurchaseSummaryCard";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-edutech-background-light">
      {/* Notification Area */}
      <NotificationArea />

      {/* Header */}
      <Header />

      {/* Main content area with gradient background */}
      <div className="bg-edutech-gradient min-h-screen">
        <div className="max-w-7xl mx-auto px-8 py-8">
          {/* Three-column grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left section spanning 2 columns - Course details and payment forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course information card */}
              <CourseInfoCard />

              {/* Course details grid */}
              <CourseDetailsGrid />

              {/* Discount code section */}
              <DiscountCodeSection />

              {/* Payment method selection */}
              <PaymentMethodSection />
            </div>

            {/* Right sidebar - Purchase summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <PurchaseSummaryCard />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
