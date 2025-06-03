'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import roomData from '../../../components/data/roomData';

export default function SingleRoomPage() {
    const params = useParams();
    const { slug } = params;
    const room = roomData.find((r) => r.slug === slug);
    console.log(room, slug, 'room');
    console.log('All available slugs:', roomData.map(r => r.slug));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!room) return <div className="text-center py-20">Room not found.</div>;

    return (
        <>
            <Head>
                <title>{room.metaTitle}</title>
                <meta name="description" content={room.metaDescription} />
                <meta name="keywords" content={room.metaKeywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main className="bg-[#fef7f3] min-h-screen">
                <section className="px-6 pt-10 max-w-7xl mx-auto">
                    <Link href="/" className="text-blue-600 hover:underline">
                        &larr; Back to Home
                    </Link>

                    {/* Room Title */}
                    <h1 className="text-center text-4xl font-semibold mt-6 mb-2">{room.title}</h1>
                    <p className="text-center text-sm text-gray-500 mb-6">(Rooms & Suites Details)</p>

                    {/* Main Image */}
                    <div className="w-full mb-10">
                        <Image
                            src={room.image}
                            alt={room.title}
                            width={1600}
                            height={600}
                            className="w-full h-[400px] object-cover rounded-2xl"
                        />
                    </div>

                    {/* Scrollable Left + Sticky Right */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {/* Left - Scrollable Info */}
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

                        {/* Right - Sticky Card */}
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
                                BOOK A ROOM
                            </button>
                        </aside>
                    </div>
                </section>

                {/* Explore Rooms and Suites - OUTSIDE scrollable section */}
                <section className="px-6 pb-20 max-w-7xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-6">Explore Rooms and Suites</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {room.otherRooms.map((r, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow">
                                <Image
                                    src={r.image}
                                    alt={r.title}
                                    width={600}
                                    height={400}
                                    className="rounded-t-2xl"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold">{r.title}</h3>
                                    <p className="text-gray-500 text-sm">{r.size} • {r.bed} • {r.sleeps}</p>
                                    <div className="mt-2 text-lg font-semibold">{r.price}</div>
                                    <Link
                                        href={`/room-details/${r.slug}`}
                                        className="mt-3 inline-block bg-black text-white py-2 px-4 rounded-xl text-sm font-medium"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
