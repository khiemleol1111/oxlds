import Image from "next/image"
import Card from "./Card"

function MainFeature() {
    return(
        <section className="">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Designed for everyone in mind</h2>
                    <p className="mb-4">Save time with a design system and UI kit that works for your workflow</p>
                    </div>
                <div className="grid grid-cols-3 gap-4 mt-8 w-full">
                    <Card cardIcon="/foundation.svg" cardTitle="Foundation" cardDescription="Foundations are the visual elements needed to create engaging layouts and end-to-end user experiences."></Card>
                    <Card cardIcon="/component.svg" cardTitle="Components" cardDescription="Components are the reusable building blocks of our design system. "></Card>
                    <Card cardIcon="/dev.svg" cardTitle="Develop" cardDescription="Implement Oxalis Design System with code and developer documentation."></Card>
                </div>
            </div>
        </section>
    )
}

export default MainFeature