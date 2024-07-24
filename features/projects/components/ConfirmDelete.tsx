import { ConfirmDeletePropType } from "@/types";

const ConfirmDelete = ({
	resourceName,
	disabled,
	onClose,
	onConfirm,
	isDeleting,
}: ConfirmDeletePropType) => {
	return (
		<div>
			<h2 className="text-base mb-8 text-wrap text-right">
				آیا از حذف {resourceName} مطمئن هستید؟
			</h2>

			<div className="flex items-center gap-4 justify-end">
				<button onClick={onClose} disabled={disabled} className="btn w-20">
					لغو
				</button>
				<button
					onClick={onConfirm}
					disabled={disabled}
					className="btn min-w-20 bg-secondary-0 text-error hover:text-secondary-0 border border-error hover:bg-red-400"
				>
					{isDeleting ? "در حال حذف..." : "تایید"}
				</button>
			</div>
		</div>
	);
};

export default ConfirmDelete;
