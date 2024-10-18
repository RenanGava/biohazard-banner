import { ContainerRisks } from "@/components/ContainerIRisks";
import { ContainerItens } from "@/components/ContainerItens";
import { Dashboard } from "@/components/Dashboard";

export default function Home() {
  return (
    <>
      <Dashboard />
      <ContainerRisks/>
      <ContainerItens/>
    </>
  );
}
