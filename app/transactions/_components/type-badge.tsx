import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";
interface TransactionTypeBadgeProps {
  transaction: Transaction;
}
const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-green-950/30 font-bold text-green-500 hover:bg-green-950/30">
        <CircleIcon className="mr-2 fill-green-500" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-red-950/30 font-bold text-red-500 hover:bg-red-950/30">
        <CircleIcon className="mr-2 fill-red-500" size={10} />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="bg-gray-800/50 font-bold text-gray-300 hover:bg-gray-800/50">
      <CircleIcon className="mr-2 fill-gray-300" size={10} />
      Investimento
    </Badge>
  );
};
export default TransactionTypeBadge;
