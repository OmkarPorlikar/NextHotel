// File: pages/rooms/[slug]/index.js (Alternative with getServerSideProps)

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import roomData from '../../../components/data/roomData';
import { whatsappNumber } from '@/components/data/constant';
import OtherFacilities from '@/components/Home/facilities';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import Breadcrumb from '@/components/SEO/Breadcrumbs';
import { getBreadcrumbs } from '@/components/SEO/breadcrumb.config';

export default function SingleRoomPage({ room }) {

    const breadcrumbs = getBreadcrumbs("roomDetail", room.title);

    if (!room) {
        return <div className="text-center py-20">Room not found.</div>;
    }

    return (
        <>

            <NextSeo
                title={room.metaTitle}
                description={room.metaDescription}
                canonical={`https://hotelsunshinepauni.com/rooms/${room.slug}`}
                openGraph={{
                    url: `https://hotelsunshinepauni.com/rooms/${room.slug}`,
                    title: room.metaTitle,
                    description: room.metaDescription,
                    images: [
                        {
                            url: room.image,
                            width: 1200,
                            height: 630,
                            alt: room.title,
                        },
                    ],
                    site_name: 'Hotel Sunshine Pauni',
                }}
                twitter={{
                    handle: '',
                    site: '',
                    cardType: 'summary_large_image',
                }}
            />

            <ArticleJsonLd
                type="Product"
                name={room.title}
                images={[room.image]}
                description={room.metaDescription}
                sku={room.slug}
                brand={{ name: 'Hotel Sunshine Pauni' }}
                offers={{
                    price: room.details.price.replace(/[^\d]/g, ''),
                    priceCurrency: 'INR',
                    availability: 'https://schema.org/InStock',
                    url: `https://hotelsunshinepauni.com/rooms/${room.slug}`,
                }}
            />


            <main className="bg-[#fef7f3] min-h-screen">
                <section className="px-6 pt-10 max-w-7xl mx-auto">
                    <Link href="/" className="text-blue-600 hover:underline">
                        &larr; Back to Home
                    </Link>
                    <Breadcrumb items={breadcrumbs} />
                    <h1 className="text-center text-4xl font-semibold mt-6 mb-2">{room.title}</h1>
                    <p className="text-center text-sm text-gray-500 mb-6">(Rooms & Suites Details)</p>

                    <div className="w-full mb-10">
                        <Image
                            src={room.image}
                            alt={room.title}
                            width={1600}
                            height={600}
                            className="w-full h-[400px] object-cover rounded-2xl"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        <div className="md:col-span-2 overflow-y-auto max-h-[80vh] pr-2 space-y-8 scrollbar-hide">
                            <section>
                                <h2 className="text-2xl font-semibold mb-3">Room Overview</h2>
                                <p className="text-gray-700">{room.overview}</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold">Room Facilities</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                    {room.facilities.map((facility, i) => (
                                        <div
                                            key={i}
                                            className="bg-[#111827] text-white text-sm font-medium py-4 px-3 rounded-xl flex items-center justify-center text-center h-20"
                                        >
                                            {facility}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold">Room Rules & Regulations</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-1 mt-3">
                                    {room.rules.map((rule, i) => (
                                        <li key={i}>{rule}</li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        <aside className="sticky top-24 h-max bg-[#fff5ec] p-6 rounded-2xl shadow-lg border border-gray-200">
                            <h2 className="text-xl font-semibold mb-4">More Information</h2>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li><strong>Size:</strong> {room.details.size}</li>
                                <li><strong>Bed:</strong> {room.details.bed}</li>
                                <li><strong>Sleeps:</strong> {room.details.sleeps}</li>
                                <li><strong>Bathroom:</strong> {room.details.bathroom}</li>
                                <li><strong>Extra Bed:</strong> {room.details.extraBed}</li>
                            </ul>
                            <div className="mt-6 text-3xl font-bold text-black">{room.details.price}</div>



                            <button className="mt-4 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-xl font-semibold transition">
                                <a href={`https://wa.me/${whatsappNumber}`}
                                    className='cursor-pointer'
                                > Book Now </a>
                            </button>
                        </aside>
                    </div>
                </section>

                {/* Other Facilities Section */}
                <section className="bg-white">
                    <div className="px-6 max-w-7xl mx-auto">
                        <OtherFacilities
                            showTitle={true}
                            title="Explore Other Facilities"
                            containerClass="py-16"
                        />
                    </div>
                </section>
            </main>
        </>
    );
};

export async function getServerSideProps({ params }) {
    const room = roomData.find((r) => r.slug === params.slug);

    // console.log(room, "rooms data");
    return {
        props: {
            room: room || null,
        },
    };
}