'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/header';
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/card';
import Footer from '@/components/footer';

export default function HomePage() {
    const t = useTranslations('HomePage');
    const [banner, setBanner] = useState(0);
    const listBannerPath = [
        '/assets/images/HaGiangBG.jpg',
        '/assets/images/HaLongBayBG.jpg',
        '/assets/images/HoiAnBG.jpg',
        '/assets/images/HoChiMinhBG.jpg',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBanner((prevBanner) => (prevBanner + 1) % listBannerPath.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [listBannerPath.length]);
    return (
        <div className="min-h-screen w-full">
            {/* Navigation */}
            <Header />
            {/* Banner */}
            <div
                className="min-h-screen w-full bg-cover bg-center relative"
                style={{
                    backgroundImage: `url(${listBannerPath[banner]})`,
                }}
            >
                <div className="flex justify-between absolute left-1/2 -translate-x-1/2 bottom-4 p-2 bg-gray-500 bg-opacity-70 rounded-xl">
                    <button
                        className={`${
                            banner === 0 ? 'bg-gray-600' : ''
                        } block w-0 h-0 mx-1 p-1 rounded-full bg-gray-200`}
                        onClick={() => {
                            setBanner(0);
                        }}
                    ></button>
                    <button
                        className={`${
                            banner === 1 ? 'bg-gray-600' : ''
                        } block w-0 h-0 mx-1 p-1 rounded-full bg-gray-200`}
                        onClick={() => {
                            setBanner(1);
                        }}
                    ></button>
                    <button
                        className={`${
                            banner === 2 ? 'bg-gray-600' : ''
                        } block w-0 h-0 mx-1 p-1 rounded-full bg-gray-200`}
                        onClick={() => {
                            setBanner(2);
                        }}
                    ></button>
                    <button
                        className={`${
                            banner === 3 ? 'bg-gray-600' : ''
                        } block w-0 h-0 mx-1 p-1 rounded-full bg-gray-200`}
                        onClick={() => {
                            setBanner(3);
                        }}
                    ></button>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <p className="font-extrabold text-center text-5xl whitespace-nowrap [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
                        Day la doan text slogan bla bla
                    </p>
                    <p className="font-bold text-center text-lg italic [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
                        Day la doan text vi du thay cho cau mo ta nho nho dai dai dai dai dai dai bla bla bla
                    </p>
                    <div className="w-full flex justify-center mt-4">
                        <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-cyan-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
                            <span className="relative z-10">{t('viewMoreButton')}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center text-gray-800">
                <div className="w-full flex justify-center items-center flex-wrap">
                    {/* Hot Review */}
                    <div className="mt-40 max-w-[1200px] w-full">
                        <h3 className="font-bold text-4xl text-center">HOT REVIEW</h3>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="relative">
                                <Card className="py-4 bg-white border rounded-md cursor-pointer hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg transition-all">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <p className="text-tiny uppercase font-bold">Tiêu đề blog</p>
                                        <small className="text-default-500">12 lượt xem</small>
                                        <p className="font-medium text-gray-600 text-sm italic">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry... standard dummy text ever since the
                                            1500s, when an unknown printer took
                                        </p>
                                    </CardHeader>
                                    <CardBody className="overflow-visible px-4 mt-8">
                                        <div className="bg-blue-500 w-full h-[200px]">Ảnh nè</div>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="relative">
                                <Card className="py-4 bg-white border rounded-md cursor-pointer hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg transition-all top-8">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <p className="text-tiny uppercase font-bold">Tiêu đề blog</p>
                                        <small className="text-default-500">12 lượt xem</small>
                                        <p className="font-medium text-gray-600 text-sm italic">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry... standard dummy text ever since the
                                            1500s, when an unknown printer took
                                        </p>
                                    </CardHeader>
                                    <CardBody className="overflow-visible px-4 mt-8">
                                        <div className="bg-blue-500 w-full h-[200px]">Ảnh nè</div>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="relative">
                                <Card className="py-4 bg-white border rounded-md cursor-pointer hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg transition-all">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <p className="text-tiny uppercase font-bold">Tiêu đề blog</p>
                                        <small className="text-default-500">12 lượt xem</small>
                                        <p className="font-medium text-gray-600 text-sm italic">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry... standard dummy text ever since the
                                            1500s, when an unknown printer took
                                        </p>
                                    </CardHeader>
                                    <CardBody className="overflow-visible px-4 mt-8">
                                        <div className="bg-blue-500 w-full h-[200px]">Ảnh nè</div>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="relative">
                                <Card className="py-4 bg-white border rounded-md cursor-pointer hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg transition-all top-8">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <p className="text-tiny uppercase font-bold">Tiêu đề blog</p>
                                        <small className="text-default-500">12 lượt xem</small>
                                        <p className="font-medium text-gray-600 text-sm italic">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry... standard dummy text ever since the
                                            1500s, when an unknown printer took
                                        </p>
                                    </CardHeader>
                                    <CardBody className="overflow-visible px-4 mt-8">
                                        <div className="bg-blue-500 w-full h-[200px]">Ảnh nè</div>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="relative">
                                <Card className="py-4 bg-white border rounded-md cursor-pointer hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg transition-all">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <p className="text-tiny uppercase font-bold">Tiêu đề blog</p>
                                        <small className="text-default-500">12 lượt xem</small>
                                        <p className="font-medium text-gray-600 text-sm italic">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry... standard dummy text ever since the
                                            1500s, when an unknown printer took
                                        </p>
                                    </CardHeader>
                                    <CardBody className="overflow-visible px-4 mt-8">
                                        <div className="bg-blue-500 w-full h-[200px]">Ảnh nè</div>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="relative">
                                <Card className="py-4 bg-white border rounded-md cursor-pointer hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg transition-all top-8">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <p className="text-tiny uppercase font-bold">Tiêu đề blog</p>
                                        <small className="text-default-500">12 lượt xem</small>
                                        <p className="font-medium text-gray-600 text-sm italic">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry... standard dummy text ever since the
                                            1500s, when an unknown printer took
                                        </p>
                                    </CardHeader>
                                    <CardBody className="overflow-visible px-4 mt-8">
                                        <div className="bg-blue-500 w-full h-[200px]">Ảnh nè</div>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="relative">
                                <Card className="py-4 bg-white border rounded-md cursor-pointer hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg transition-all">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <p className="text-tiny uppercase font-bold">Tiêu đề blog</p>
                                        <small className="text-default-500">12 lượt xem</small>
                                        <p className="font-medium text-gray-600 text-sm italic">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry... standard dummy text ever since the
                                            1500s, when an unknown printer took
                                        </p>
                                    </CardHeader>
                                    <CardBody className="overflow-visible px-4 mt-8">
                                        <div className="bg-blue-500 w-full h-[200px]">Ảnh nè</div>
                                    </CardBody>
                                </Card>
                            </div>

                            <div className="relative">
                                <Card className="py-4 bg-white border rounded-md cursor-pointer hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg transition-all top-8">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <p className="text-tiny uppercase font-bold">Tiêu đề blog</p>
                                        <small className="text-default-500">12 lượt xem</small>
                                        <p className="font-medium text-gray-600 text-sm italic">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry... standard dummy text ever since the
                                            1500s, when an unknown printer took
                                        </p>
                                    </CardHeader>
                                    <CardBody className="overflow-visible px-4 mt-8">
                                        <div className="bg-blue-500 w-full h-[200px]">Ảnh nè</div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                    {/* Lý do tạo ra website */}
                    <div className="mt-40 max-w-[1200px] w-full">
                        <div className="grid grid-cols-2 gap-8 my-4">
                            <div className="bg-gray-400">Ảnh nè</div>
                            <div className="relative">
                                <h3 className="font-bold text-4xl">Ly Do Tao Ra WEBSITE</h3>
                                <p className="text-gray-400 font-medium my-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry... standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <div className="w-full text-end">
                                    <button className="group relative min-h-[50px] w-40 overflow-hidden border border-purple-500 bg-white text-purple-500 transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
                                        <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                                        <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                                            {t('viewMoreButton')}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Ý nghĩa mang lại */}
                    <div className="mt-40 max-w-[1200px] w-full">
                        <div className="grid grid-cols-2 gap-8 my-4">
                            <div className="relative">
                                <h3 className="font-bold text-4xl">Doan Y Nghia Mang Lai Ne</h3>
                                <p className="text-gray-400 font-medium my-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry... standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <div className="w-full text-end">
                                    <button className="group relative min-h-[50px] w-40 overflow-hidden border border-purple-500 bg-white text-purple-500 transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
                                        <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                                        <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                                            {t('viewMoreButton')}
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="bg-gray-400">Ảnh nè</div>
                        </div>
                    </div>
                    {/* Bài mới*/}
                    <div className="mt-40 max-w-[1200px] w-full">
                        <div className="flex justify-center items-center text-center">
                            <div className="relative w-full">
                                <div className="w-full flex justify-between">
                                    <h3 className="font-bold text-4xl text-start">New letters</h3>
                                    <button className="flex items-center px-2 rounded-3xl hover:shadow-xl">
                                        {t('viewMoreNewLetter')}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="size-6 ml-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="grid grid-cols-4 gap-4 mt-2">
                                    <Card className="py-4 bg-white border rounded-md cursor-pointer grayscale hover:grayscale-0 hover:shadow-lg transition-all duration-1000">
                                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                            <p className="text-tiny uppercase font-bold">Tiêu đề blog</p>
                                            <small className="text-default-500">12 lượt xem</small>
                                        </CardHeader>
                                        <CardBody className="overflow-visible px-4">
                                            <div className="bg-blue-500 w-full h-[200px]">Ảnh nè</div>
                                        </CardBody>
                                    </Card>
                                    <Card className="py-4 bg-white border rounded-md cursor-pointer grayscale hover:grayscale-0 hover:shadow-lg transition-all duration-1000">
                                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                            <p className="text-tiny uppercase font-bold">Tiêu đề blog</p>
                                            <small className="text-default-500">12 lượt xem</small>
                                        </CardHeader>
                                        <CardBody className="overflow-visible px-4">
                                            <div className="bg-blue-500 w-full h-[200px]">Ảnh nè</div>
                                        </CardBody>
                                    </Card>
                                    <Card className="py-4 bg-white border rounded-md cursor-pointer grayscale hover:grayscale-0 hover:shadow-lg transition-all duration-1000">
                                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                            <p className="text-tiny uppercase font-bold">Tiêu đề blog</p>
                                            <small className="text-default-500">12 lượt xem</small>
                                        </CardHeader>
                                        <CardBody className="overflow-visible px-4">
                                            <div className="bg-blue-500 w-full h-[200px]">Ảnh nè</div>
                                        </CardBody>
                                    </Card>
                                    <Card className="py-4 bg-white border rounded-md cursor-pointer grayscale hover:grayscale-0 hover:shadow-lg transition-all duration-1000">
                                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                            <p className="text-tiny uppercase font-bold">Tiêu đề blog</p>
                                            <small className="text-default-500">12 lượt xem</small>
                                        </CardHeader>
                                        <CardBody className="overflow-visible px-4">
                                            <div className="bg-blue-500 w-full h-[200px]">Ảnh nè</div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Về thương hiệu */}
                    <div className="my-40 max-w-[1200px] w-full">
                        <div className="my-4 flex justify-center items-center text-center">
                            <div className="relative">
                                <h3 className="font-bold text-4xl">(câu chuyện)</h3>
                                <p className="text-gray-400 font-medium my-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry... standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it Lorem Ipsum is simply dummy
                                    text of the printing and typesetting industry. Lorem Ipsum has been the industry...
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry... standard dummy text ever
                                    since the 1500s, when an unknown printer took a galley of type and scrambled it
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry... standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div>
                <Footer />
            </div>
        </div>
    );
}
