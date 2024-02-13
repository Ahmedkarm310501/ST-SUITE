import { alerts } from "../data/alerts";
import Alert from "./Alert";

const Alerts = () => {
  return (
    <div className="bg-primary w-full rounded-2xl h-full">
      <div className="flex flex-col gap-3 p-6">
        {alerts.map((alert, i) => (
          <Alert key={i} {...alert} />
        ))}
      </div>
    </div>
  );
};

export default Alerts;
