import Analytics from "../components/analytics";
import Cards from "../components/cards";
import SavingPlan from "../components/saving-plan";
import Transaction from "../components/transactions";
import { ToogleSidebarProps } from "../types/toogle.sidebar.props";
import TopBar from "./topbar";

export default function MainContent({ toggleSidebar }: ToogleSidebarProps) {
  return (
    <div className="flex flex-col w-full">
      <TopBar toggleSidebar={toggleSidebar} />

      {/* Main Content Section */}
      <main className="w-full bg-background p-4">
        <section className="w-full grid grid-cols-1 gap-4">
          {/* For Overview and Saving Section */}

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <article className="lg:col-span-2 bg-white rounded-lg p-4 shadow-sm">
              <Cards />
            </article>
            <aside className="lg:col-span-1 bg-white rounded-lg p-4 shadow-sm">
              <SavingPlan />
            </aside>
          </section>

          {/* For Analytics and Transaction Section */}

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <article className="lg:col-span-2 bg-white rounded-lg p-4 shadow-sm">
              <Analytics />
            </article>

            <aside className="lg:col-span-1 bg-white rounded-lg p-4 shadow-sm">
              <Transaction />
            </aside>
          </section>
        </section>
      </main>
    </div>
  );
}
