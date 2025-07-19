export default function MobileWarning() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 text-white text-center px-6 sm:hidden">
            <div className="bg-primary p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-2">This site is best viewed on desktop</h2>
                <p>Please switch to a larger screen for the best experience.</p>
            </div>
        </div>
    );
}
