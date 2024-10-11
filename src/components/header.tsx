'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
    const t = useTranslations('Header');
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const isVietnamese = pathname.includes('/vi');
    const isEnglish = pathname.includes('/en');

    console.log(pathname);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`sm:fixed absolute top-0 left-0 right-0 h-16 flex items-center justify-center shadow-lg border-b-2 border-sky-950 sm:px-16 px-4 z-30 text-white font-semibold bg-sky-900 ${
                scrolled ? 'bg-opacity-100' : 'bg-opacity-30'
            } transition-colors duration-500`}
        >
            <div className="w-[1200px] flex justify-between items-center h-full">
                <div className="mx-4 h-full flex justify-center items-center">
                    <Link className="sm:flex block items-center" href={t('homePageUrl')}>
                        <span className="sm:text-2xl text-lg font-bold ml-0 sm:ml-8">{t('brandName')}</span>
                    </Link>
                </div>
                <div className="h-full">
                    <ul className="flex justify-between items-center h-full text-sm">
                        <li className="group px-4 h-full relative font-semibold flex justify-center items-center cursor-pointer hover:text-yellow-400">
                            {t('typesOfTravel')}
                            <div className="absolute bottom-0 right-8 w-0 h-0 border-8 border-transparent border-b-sky-600 border-opacity-50 hidden group-hover:block"></div>
                            <div className="w-fit min-w-full absolute hidden group-hover:block top-full right-0 rounded overflow-hidden text-white shadow bg-sky-600 bg-opacity-50">
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('culturalTourism')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('ecoTourism')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('resortTravel')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('adventureTravel')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('spiritualTravel')}</span>
                                </Link>
                            </div>
                        </li>
                        <li className="group px-4 h-full relative font-semibold flex justify-center items-center cursor-pointer hover:text-yellow-400">
                            {t('travelDestinations')}
                            <div className="absolute bottom-0 right-8 w-0 h-0 border-8 border-transparent border-b-sky-600 border-opacity-50 hidden group-hover:block"></div>
                            <div className="w-fit min-w-full absolute hidden group-hover:block top-full right-0 rounded overflow-hidden text-white shadow bg-sky-600 bg-opacity-50">
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('internationalTourism')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('domesticTourism')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('cityTourism')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('ruralTourism')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('beachTourism')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('mountainTourism')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('islandTourism')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('lakeTourism')}</span>
                                </Link>
                            </div>
                        </li>
                        <li className="group px-4 h-full relative font-semibold flex justify-center items-center cursor-pointer hover:text-yellow-400">
                            {t('touristActivities')}
                            <div className="absolute bottom-0 right-8 w-0 h-0 border-8 border-transparent border-b-sky-600 border-opacity-50 hidden group-hover:block"></div>
                            <div className="w-fit min-w-full absolute hidden group-hover:block top-full right-0 rounded overflow-hidden text-white shadow bg-sky-600 bg-opacity-50">
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('dining')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('trekking')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('scubaDiving')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('kayaking')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('cycling')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('hiking')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('sightSeeing')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('shopping')}</span>
                                </Link>
                            </div>
                        </li>
                        <li className="group px-4 h-full relative font-semibold flex justify-center items-center cursor-pointer hover:text-yellow-400">
                            {t('travelExperience')}
                            <div className="absolute bottom-0 right-8 w-0 h-0 border-8 border-transparent border-b-sky-600 border-opacity-50 hidden group-hover:block"></div>
                            <div className="w-fit min-w-full absolute hidden group-hover:block top-full right-0 rounded overflow-hidden text-white shadow bg-sky-600 bg-opacity-50">
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('planning')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('visaRequirements')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('luggage')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('vaccinations')}</span>
                                </Link>
                                <Link
                                    className="block items-center w-full px-3 py-1 hover:bg-sky-800 hover:text-yellow-400"
                                    href={t('')}
                                >
                                    <span className="whitespace-nowrap">{t('currencyExchange')}</span>
                                </Link>
                            </div>
                        </li>
                        <li className="group px-4 w-20 h-full relative font-semibold flex items-center">
                            <div className="flex flex-row justify-center select-none">
                                <div className="flex flex-row items-center right-1">
                                    {/* Button 1 (Vietnamese) */}
                                    <button
                                        onClick={() => {
                                            router.replace(pathname.replace('/en', '/vi'));
                                        }}
                                        className={`flex flex-row items-center rounded-full border text-sm font-medium hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ${
                                            isVietnamese
                                                ? 'border-blue-500 text-blue-500'
                                                : 'border-gray-300 text-gray-700 grayscale'
                                        }`}
                                    >
                                        <div className="w-6 h-6 bg-cover rounded-full bg-[url('/assets/images/iconVietNam.png')]"></div>
                                    </button>
                                    |{/* Button 2 (English) */}
                                    <button
                                        onClick={() => {
                                            router.replace(pathname.replace('/vi', '/en'));
                                        }}
                                        className={`flex flex-row items-center rounded-full border text-sm font-medium hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ${
                                            isEnglish
                                                ? 'border-blue-500 text-blue-500'
                                                : 'border-gray-300 text-gray-700 grayscale'
                                        }`}
                                    >
                                        <div className="w-6 h-6 bg-cover rounded-full bg-[url('/assets/images/iconUK.png')]"></div>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
