import { Input } from "@components/shared/forms/Input";
import { TextArea } from "@components/shared/forms/TextArea";
import i18n from "@configs/i18n";
import { ProfileFormProps } from "./type";
import { TextEdit } from "@components/shared/forms/TextEdit";
import { Datetime } from "@components/shared/forms/DateTime";

type Props = ProfileFormProps;

export function Information({ register, errors }: Props) {
    return (
        <div>
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-primary">
                    {i18n("Words.information")}
                </h2>
                <p className="text-sm">
                    Informações gerais e de publicação do passeio.
                </p>
            </div>

            <div className="flex flex-wrap justify-between">
                {/* Title */}
                <div className="w-full my-2">
                    <Input
                        required
                        dataTestId="title"
                        {...register("title")}
                        label={i18n("Words.title")}
                        errors={errors?.title}
                    />
                </div>
                {/* Available At */}
                <div className="w-full md:w-[48%] my-2">
                    <Datetime
                        dataTestId="available_at"
                        {...register("available_at")}
                        label={i18n("Words.viewed_at")}
                        errors={errors?.available_at}
                    />
                </div>

                {/* Unavailable At */}
                <div className="w-full md:w-[48%] my-2">
                    <Datetime
                        dataTestId="unavailable_at"
                        {...register("unavailable_at")}
                        label={i18n("Words.unavailable_at")}
                        errors={errors?.unavailable_at}
                    />
                </div>

                {/* Slug */}
                <div className="w-full md:w-[48%] my-2">
                    <Input
                        required
                        dataTestId="slug"
                        {...register("slug")}
                        label={i18n("Words.slug")}
                        errors={errors?.slug}
                    />
                </div>

                {/* Price */}
                <div className="w-full md:w-[48%] my-2">
                    <Input
                        required
                        type="number"
                        step="0.01"
                        dataTestId="price"
                        {...register("price", { valueAsNumber: true })}
                        label={i18n("Words.price")}
                        errors={errors?.price}
                    />
                </div>

                {/* Promotional Price */}
                <div className="w-full md:w-[48%] my-2">
                    <Input
                        type="number"
                        step="0.01"
                        dataTestId="promotional_price"
                        {...register("promotional_price", { valueAsNumber: true })}
                        label={i18n("Words.promotional_price")}
                        errors={errors?.promotional_price}
                    />
                </div>

                {/* Slots */}
                <div className="w-full md:w-[48%] my-2">
                    <Input
                        type="number"
                        dataTestId="slots"
                        {...register("slots", { valueAsNumber: true })}
                        label={i18n("Words.slots")}
                        errors={errors?.slots}
                    />
                </div>

                {/* Video */}
                <div className="w-full my-2">
                    <Input
                        type="url"
                        dataTestId="video"
                        {...register("video")}
                        label={i18n("Words.video")}
                        errors={errors?.video}
                    />
                </div>

                {/* Short description */}
                <div className="w-full my-2">
                    <TextArea
                        dataTestId="short_description"
                        {...register("short_description")}
                        label={i18n("Words.short_description")}
                        className="h-24"
                        errors={errors?.short_description}
                    />
                </div>

                {/* Description */}
                <div className="w-full my-2">
                    <TextEdit
                        {...register("description")}
                        dataTestId="description"
                        label={i18n("Words.description")}
                        placeholder={i18n("Words.about_description")}
                        errors={errors?.description}
                    />
                </div>
            </div>
        </div>
    );
}
