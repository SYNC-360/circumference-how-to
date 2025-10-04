'use client';

import { useState } from 'react';
import { Calculator, Ruler, ArrowRight, Circle } from 'lucide-react';

export default function CircumferenceGuide() {
  const [inputType, setInputType] = useState<'radius' | 'diameter' | 'area'>('radius');
  const [radius, setRadius] = useState<string>('5');
  const [diameter, setDiameter] = useState<string>('');
  const [area, setArea] = useState<string>('');

  const calculateCircumference = () => {
    const PI = 3.14159;
    
    if (inputType === 'radius') {
      const r = parseFloat(radius) || 0;
      return {
        circumference: (2 * PI * r).toFixed(2),
        radius: r.toFixed(2),
        diameter: (r * 2).toFixed(2),
        area: (PI * r * r).toFixed(2),
        formula: `C = 2πr = 2 × ${PI.toFixed(5)} × ${r}`,
        method: 'Using radius'
      };
    } else if (inputType === 'diameter') {
      const d = parseFloat(diameter) || 0;
      const r = d / 2;
      return {
        circumference: (PI * d).toFixed(2),
        radius: r.toFixed(2),
        diameter: d.toFixed(2),
        area: (PI * r * r).toFixed(2),
        formula: `C = πd = ${PI.toFixed(5)} × ${d}`,
        method: 'Using diameter'
      };
    } else {
      const a = parseFloat(area) || 0;
      const r = Math.sqrt(a / PI);
      return {
        circumference: (2 * PI * r).toFixed(2),
        radius: r.toFixed(2),
        diameter: (r * 2).toFixed(2),
        area: a.toFixed(2),
        formula: `C = 2π√(A/π) = 2 × ${PI.toFixed(5)} × √(${a}/${PI.toFixed(5)})`,
        method: 'Using area'
      };
    }
  };

  const result = calculateCircumference();

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Find Circumference of a Circle",
            "description": "Step-by-step guide to calculate the circumference of a circle using radius, diameter, or area",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Identify what you know",
                "text": "Determine if you have the radius, diameter, or area of the circle"
              },
              {
                "@type": "HowToStep",
                "name": "Choose the right formula",
                "text": "Use C = 2πr for radius, C = πd for diameter, or C = 2π√(A/π) for area"
              },
              {
                "@type": "HowToStep",
                "name": "Substitute values",
                "text": "Plug your known values into the formula"
              },
              {
                "@type": "HowToStep",
                "name": "Calculate",
                "text": "Multiply using π ≈ 3.14159 to find the circumference"
              }
            ]
          })
        }}
      />

      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How to Find Circumference of a Circle
          </h1>
          <p className="text-xl text-purple-100 mb-6">
            Master the formulas, use our calculator, and learn with step-by-step examples
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <details className="md:hidden">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Quick Navigation ▼
            </summary>
            <nav className="mt-3 space-y-2">
              <a href="#calculator" className="block text-sm text-gray-600 hover:text-purple-600">Calculator</a>
              <a href="#what-is" className="block text-sm text-gray-600 hover:text-purple-600">What is Circumference?</a>
              <a href="#formulas" className="block text-sm text-gray-600 hover:text-purple-600">Formulas</a>
              <a href="#how-to" className="block text-sm text-gray-600 hover:text-purple-600">How to Calculate</a>
              <a href="#examples" className="block text-sm text-gray-600 hover:text-purple-600">Examples</a>
              <a href="#tips" className="block text-sm text-gray-600 hover:text-purple-600">Tips & Tricks</a>
              <a href="#faq" className="block text-sm text-gray-600 hover:text-purple-600">FAQ</a>
            </nav>
          </details>
          <nav className="hidden md:flex md:items-center md:justify-center md:space-x-8">
            <a href="#calculator" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Calculator</a>
            <a href="#what-is" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">What is Circumference?</a>
            <a href="#formulas" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Formulas</a>
            <a href="#how-to" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">How to Calculate</a>
            <a href="#examples" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Examples</a>
            <a href="#tips" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Tips</a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">FAQ</a>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div id="calculator" className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Circle className="w-6 h-6 text-purple-600" />
            Circumference Calculator
          </h2>

          <div className="flex flex-wrap gap-4 mb-8 border-b pb-4">
            <button
              onClick={() => setInputType('radius')}
              className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                inputType === 'radius'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              From Radius
            </button>
            <button
              onClick={() => setInputType('diameter')}
              className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                inputType === 'diameter'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              From Diameter
            </button>
            <button
              onClick={() => setInputType('area')}
              className={`px-6 py-3 font-semibold rounded-lg transition-all ${
                inputType === 'area'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              From Area
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Ruler className="w-5 h-5 text-purple-600" />
                Input Value
              </h3>
              
              {inputType === 'radius' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Radius (r)
                  </label>
                  <input
                    type="number"
                    value={radius}
                    onChange={(e) => setRadius(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-lg"
                    placeholder="Enter radius"
                  />
                  <p className="text-sm text-gray-500 mt-2">Distance from center to edge</p>
                </div>
              )}

              {inputType === 'diameter' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Diameter (d)
                  </label>
                  <input
                    type="number"
                    value={diameter}
                    onChange={(e) => setDiameter(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-lg"
                    placeholder="Enter diameter"
                  />
                  <p className="text-sm text-gray-500 mt-2">Distance across through center</p>
                </div>
              )}

              {inputType === 'area' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area (A)
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-lg"
                    placeholder="Enter area"
                  />
                  <p className="text-sm text-gray-500 mt-2">Space inside the circle</p>
                </div>
              )}

              <div className="mt-6 p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                <p className="text-sm font-medium text-purple-800 mb-2">Formula Used:</p>
                <p className="font-mono text-sm text-purple-900">{result.formula}</p>
                <p className="text-xs text-purple-700 mt-2">{result.method}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-purple-600" />
                Results
              </h3>
              
              <div className="space-y-4">
                <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
                  <p className="text-sm font-medium mb-2">Circumference</p>
                  <p className="text-4xl font-bold">{result.circumference}</p>
                  <p className="text-purple-100 text-sm mt-1">units</p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-xs text-gray-600 mb-1">Radius</p>
                    <p className="text-lg font-semibold text-gray-800">{result.radius}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-xs text-gray-600 mb-1">Diameter</p>
                    <p className="text-lg font-semibold text-gray-800">{result.diameter}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-xs text-gray-600 mb-1">Area</p>
                    <p className="text-lg font-semibold text-gray-800">{result.area}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <article className="max-w-none">
            <h2 id="what-is" className="text-3xl font-bold text-gray-900 mb-6">
              What is the Circumference of a Circle?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The circumference of a circle is the distance around its edge - essentially, the perimeter of a circle. If you were to walk completely around a circular track, the distance you walked would be the circumference. It&apos;s one of the most important measurements in geometry and appears constantly in mathematics, engineering, and everyday life.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Think of circumference as the &quot;boundary length&quot; of a circle. Just as a rectangle has a perimeter (the sum of all four sides), a circle has a circumference (the distance around its curved edge). The word &quot;circumference&quot; comes from Latin words meaning &quot;to carry around,&quot; which perfectly describes what this measurement represents.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Understanding circumference is essential because it connects directly to other circle properties through the mathematical constant π (pi). This relationship has fascinated mathematicians for thousands of years and remains fundamental to fields ranging from architecture to aerospace engineering.
            </p>

            <h2 id="formulas" className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Circumference Formulas: Three Ways to Calculate
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              There are three main formulas for finding the circumference of a circle, each starting from different known information. The formula you choose depends on whether you know the radius, diameter, or area. All three formulas are mathematically equivalent - they just start from different places.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Formula 1: Circumference from Radius
            </h3>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-6">
              <p className="text-lg font-semibold text-purple-900 mb-2">Formula:</p>
              <p className="text-3xl font-mono text-purple-800 mb-3">C = 2πr</p>
              <p className="text-sm text-purple-700">
                Where C is circumference, r is radius, and π ≈ 3.14159
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              This is the most commonly used formula because the radius is the fundamental measurement of a circle. The formula tells us that circumference equals two times pi times the radius. Since π is approximately 3.14159, the circumference is always about 6.28 times the radius. If a circle has a radius of 5 cm, its circumference is 2 × 3.14159 × 5 = 31.42 cm.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Why multiply by 2? Because the formula C = πd (diameter formula) can be rewritten as C = π(2r), which simplifies to C = 2πr. The factor of 2 accounts for the fact that the diameter is twice the radius. This formula appears everywhere in mathematics - from calculating wheel rotations to determining the orbits of planets.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Formula 2: Circumference from Diameter
            </h3>

            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-6">
              <p className="text-lg font-semibold text-indigo-900 mb-2">Formula:</p>
              <p className="text-3xl font-mono text-indigo-800 mb-3">C = πd</p>
              <p className="text-sm text-indigo-700">
                Where C is circumference, d is diameter, and π ≈ 3.14159
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              This formula is beautifully simple: circumference equals pi times diameter. This is actually the fundamental definition of π - it&apos;s the ratio of a circle&apos;s circumference to its diameter, and this ratio is the same for every circle regardless of size. If a circle has a diameter of 10 inches, its circumference is 3.14159 × 10 = 31.42 inches.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This formula is particularly useful when you can easily measure the diameter (the distance straight across the circle through its center). For physical objects like wheels, pipes, or circular tables, measuring the diameter is often more practical than measuring the radius. Simply multiply that diameter by π to get the circumference.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Formula 3: Circumference from Area
            </h3>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
              <p className="text-lg font-semibold text-blue-900 mb-2">Formula:</p>
              <p className="text-3xl font-mono text-blue-800 mb-3">C = 2π√(A/π)</p>
              <p className="text-sm text-blue-700">
                Where C is circumference, A is area, and π ≈ 3.14159
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              This formula finds circumference when you know the area but not the radius or diameter. It works by first finding the radius from the area formula (A = πr²), then using that radius in the standard circumference formula. If a circle has an area of 78.5 square units, first find the radius: r = √(78.5/π) ≈ 5, then find circumference: C = 2π(5) ≈ 31.42 units.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              While this formula looks more complex, it&apos;s simply a combination of two concepts: the area formula rearranged to solve for radius, then the radius formula for circumference. This is useful in problems where you&apos;re given the area first, such as &quot;A circular garden covers 100 square meters. How much fencing is needed to surround it?&quot;
            </p>

            <h2 id="how-to" className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              How to Calculate Circumference: Step-by-Step Guide
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Calculating circumference is straightforward once you understand which formula to use. The process always involves these same basic steps, regardless of which formula you choose. Here&apos;s a universal approach that works every time.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg mb-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Universal 4-Step Process:</h3>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <p className="font-semibold text-gray-900">Identify what you know</p>
                    <p className="text-gray-700 text-sm">Do you have the radius, diameter, or area? This determines which formula to use.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-900">Choose the correct formula</p>
                    <p className="text-gray-700 text-sm">Use C = 2πr for radius, C = πd for diameter, or C = 2π√(A/π) for area.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-900">Substitute your values</p>
                    <p className="text-gray-700 text-sm">Replace the variables in the formula with your actual numbers.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <p className="font-semibold text-gray-900">Calculate the result</p>
                    <p className="text-gray-700 text-sm">Use π ≈ 3.14159 (or your calculator&apos;s π button) to compute the final answer.</p>
                  </div>
                </li>
              </ol>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Method 1: Calculating from Radius
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              When you know the radius, simply multiply it by 2π. For example, if the radius is 7 meters: C = 2 × 3.14159 × 7 = 43.98 meters. The calculation is straightforward - first multiply 2 × 7 to get 14, then multiply 14 × 3.14159 to get your final answer. Most calculators have a π button that makes this even easier.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Method 2: Calculating from Diameter
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              When you know the diameter, multiply it by π. For example, if the diameter is 14 meters: C = 3.14159 × 14 = 43.98 meters. This is the simplest calculation because it&apos;s just one multiplication. Notice this gives the same answer as Method 1 - that&apos;s because a diameter of 14 means a radius of 7.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Method 3: Calculating from Area
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              When you know the area, first find the radius by dividing the area by π and taking the square root. Then use that radius to find circumference. For example, if area is 153.94 square meters: first find radius = √(153.94 ÷ 3.14159) = √49 = 7 meters, then find circumference = 2 × 3.14159 × 7 = 43.98 meters.
            </p>

            <h2 id="examples" className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              10 Worked Examples with Solutions
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Example 1: Basic radius problem</p>
                <p className="text-gray-700 mb-3">A circle has a radius of 10 cm. Find its circumference.</p>
                <p className="text-sm text-gray-600 mb-2">Solution:</p>
                <p className="text-gray-700">Using C = 2πr</p>
                <p className="text-gray-700">C = 2 × 3.14159 × 10</p>
                <p className="text-gray-700">C = 6.28318 × 10</p>
                <p className="text-gray-700 font-semibold">Answer: C = 62.83 cm</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Example 2: Diameter problem</p>
                <p className="text-gray-700 mb-3">A bicycle wheel has a diameter of 26 inches. What is the circumference?</p>
                <p className="text-sm text-gray-600 mb-2">Solution:</p>
                <p className="text-gray-700">Using C = πd</p>
                <p className="text-gray-700">C = 3.14159 × 26</p>
                <p className="text-gray-700 font-semibold">Answer: C = 81.68 inches</p>
                <p className="text-sm text-gray-600 mt-2">This means the wheel travels 81.68 inches per revolution.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Example 3: Area to circumference</p>
                <p className="text-gray-700 mb-3">A circular pizza has an area of 314 square inches. Find its circumference.</p>
                <p className="text-sm text-gray-600 mb-2">Solution:</p>
                <p className="text-gray-700">First, find radius: r = √(A/π) = √(314/3.14159) = √100 = 10 inches</p>
                <p className="text-gray-700">Then find circumference: C = 2πr = 2 × 3.14159 × 10</p>
                <p className="text-gray-700 font-semibold">Answer: C = 62.83 inches</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Example 4: Fractional radius</p>
                <p className="text-gray-700 mb-3">Find the circumference of a circle with radius 3.5 meters.</p>
                <p className="text-sm text-gray-600 mb-2">Solution:</p>
                <p className="text-gray-700">C = 2πr = 2 × 3.14159 × 3.5</p>
                <p className="text-gray-700">C = 6.28318 × 3.5</p>
                <p className="text-gray-700 font-semibold">Answer: C = 21.99 meters</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Example 5: Real-world track problem</p>
                <p className="text-gray-700 mb-3">A circular running track has a diameter of 50 meters. How far do you run in one lap?</p>
                <p className="text-sm text-gray-600 mb-2">Solution:</p>
                <p className="text-gray-700">One lap equals the circumference</p>
                <p className="text-gray-700">C = πd = 3.14159 × 50</p>
                <p className="text-gray-700 font-semibold">Answer: You run 157.08 meters in one lap</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Example 6: Large scale problem</p>
                <p className="text-gray-700 mb-3">A circular pond has a radius of 25 feet. How much fencing is needed to go around it?</p>
                <p className="text-sm text-gray-600 mb-2">Solution:</p>
                <p className="text-gray-700">Fencing needed equals circumference</p>
                <p className="text-gray-700">C = 2πr = 2 × 3.14159 × 25</p>
                <p className="text-gray-700">C = 6.28318 × 25</p>
                <p className="text-gray-700 font-semibold">Answer: 157.08 feet of fencing needed</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Example 7: Finding distance traveled</p>
                <p className="text-gray-700 mb-3">A car wheel has a diameter of 24 inches. How far does the car travel in 100 wheel rotations?</p>
                <p className="text-sm text-gray-600 mb-2">Solution:</p>
                <p className="text-gray-700">One rotation = one circumference</p>
                <p className="text-gray-700">C = πd = 3.14159 × 24 = 75.40 inches per rotation</p>
                <p className="text-gray-700">Distance = 75.40 × 100 rotations</p>
                <p className="text-gray-700 font-semibold">Answer: 7,540 inches (or 628.33 feet)</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Example 8: Comparison problem</p>
                <p className="text-gray-700 mb-3">Circle A has a radius of 5 cm. Circle B has a radius of 10 cm. How much longer is Circle B&apos;s circumference?</p>
                <p className="text-sm text-gray-600 mb-2">Solution:</p>
                <p className="text-gray-700">Circle A: C = 2π(5) = 31.42 cm</p>
                <p className="text-gray-700">Circle B: C = 2π(10) = 62.83 cm</p>
                <p className="text-gray-700">Difference = 62.83 - 31.42</p>
                <p className="text-gray-700 font-semibold">Answer: Circle B is 31.42 cm longer (exactly double)</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Example 9: Reverse problem</p>
                <p className="text-gray-700 mb-3">A circle has a circumference of 100 cm. What is its radius?</p>
                <p className="text-sm text-gray-600 mb-2">Solution:</p>
                <p className="text-gray-700">Rearrange C = 2πr to solve for r</p>
                <p className="text-gray-700">r = C/(2π) = 100/(2 × 3.14159)</p>
                <p className="text-gray-700">r = 100/6.28318</p>
                <p className="text-gray-700 font-semibold">Answer: r = 15.92 cm</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Example 10: Multi-step problem</p>
                <p className="text-gray-700 mb-3">A circular garden has an area of 200 square meters. You want to build a path around it. If the path adds 1 meter to the radius, what is the circumference of the outer edge?</p>
                <p className="text-sm text-gray-600 mb-2">Solution:</p>
                <p className="text-gray-700">Step 1: Find original radius: r = √(200/π) = √(200/3.14159) = 7.98 m</p>
                <p className="text-gray-700">Step 2: Add path width: new radius = 7.98 + 1 = 8.98 m</p>
                <p className="text-gray-700">Step 3: Find new circumference: C = 2π(8.98) = 56.42 m</p>
                <p className="text-gray-700 font-semibold">Answer: The outer edge is 56.42 meters around</p>
              </div>
            </div>

            <h2 id="tips" className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Tips, Tricks & Common Mistakes
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Essential Tips for Success
            </h3>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
              <p className="font-semibold text-green-900 mb-2">Use the π button on your calculator</p>
              <p className="text-gray-700">Don&apos;t round π to 3.14 if you want accurate results. Most calculators have a π button that uses more decimal places automatically. This is especially important for large circles where small rounding errors become significant.</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
              <p className="font-semibold text-green-900 mb-2">Remember the 2 in C = 2πr</p>
              <p className="text-gray-700">The most common mistake is forgetting to multiply by 2 when using the radius formula. A good memory trick: the &quot;2&quot; is there because diameter = 2 × radius, and the formula C = πd is equivalent to C = π(2r) = 2πr.</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
              <p className="font-semibold text-green-900 mb-2">Keep units consistent</p>
              <p className="text-gray-700">If your radius is in centimeters, your circumference will be in centimeters. If your area is in square feet, your circumference will be in feet (not square feet). The circumference is always a linear measurement, never squared.</p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Common Mistakes to Avoid
            </h3>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-semibold text-gray-900 mb-1">❌ Confusing radius and diameter</p>
                <p className="text-gray-700">If a problem says &quot;the circle has a diameter of 10,&quot; don&apos;t use 10 as the radius. The radius is half the diameter, so r = 5 in this case.</p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-semibold text-gray-900 mb-1">❌ Forgetting to square root when finding radius from area</p>
                <p className="text-gray-700">When using A = πr², you must take the square root to solve for r. Don&apos;t forget this step: r = √(A/π), not just A/π.</p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-semibold text-gray-900 mb-1">❌ Using degrees instead of the radius value</p>
                <p className="text-gray-700">Sometimes students mistakenly use 360 (degrees in a circle) in their calculations. Circumference formulas don&apos;t use degrees - they use the radius or diameter length.</p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-semibold text-gray-900 mb-1">❌ Mixing up circumference and area formulas</p>
                <p className="text-gray-700">Circumference formulas have one &quot;r&quot; (or &quot;d&quot;) while area formulas have r². Don&apos;t square the radius when finding circumference.</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Quick Mental Math Tricks
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              For quick estimates, remember that circumference is about 6 times the radius (since 2π ≈ 6.28). So if the radius is 10, the circumference is roughly 60. For diameter, multiply by 3 for a quick estimate (since π ≈ 3.14). A circle with diameter 10 has a circumference of roughly 30.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Another useful relationship: the circumference is always longer than the diameter, specifically about 3.14 times longer. This makes intuitive sense - the curved path around a circle is longer than the straight path across it.
            </p>

            <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">How do you find the circumference of a circle with the radius?</p>
                <p className="text-gray-700">Use the formula C = 2πr. Multiply 2 times π (approximately 3.14159) times the radius. For example, if the radius is 5, the circumference is 2 × 3.14159 × 5 = 31.42 units.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">What is the easiest way to find circumference?</p>
                <p className="text-gray-700">The easiest way is using the diameter formula: C = πd. Simply multiply the diameter by π. This requires just one multiplication, whereas the radius formula requires two (first multiplying radius by 2, then by π).</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Can you find circumference without radius or diameter?</p>
                <p className="text-gray-700">Yes, you can find circumference from the area using C = 2π√(A/π). First divide the area by π, take the square root to get the radius, then multiply by 2π. You can also find it from the arc length if you know what fraction of the circle the arc represents.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Is circumference the same as perimeter?</p>
                <p className="text-gray-700">Yes, circumference is the perimeter of a circle. The word &quot;perimeter&quot; is typically used for polygons (shapes with straight sides), while &quot;circumference&quot; is specifically used for circles and other curved shapes. They both mean the distance around the edge.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Why do we use π in the circumference formula?</p>
                <p className="text-gray-700">Pi (π) is the ratio of any circle&apos;s circumference to its diameter - this ratio is always the same, approximately 3.14159. Since C/d = π, we can rearrange to get C = πd. This fundamental relationship is why π appears in all circle formulas.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">What happens to circumference if you double the radius?</p>
                <p className="text-gray-700">If you double the radius, you double the circumference. This is because circumference has a linear relationship with radius (C = 2πr). If r becomes 2r, then C becomes 2(2πr) = 2C. This is different from area, which quadruples when you double the radius.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">How accurate does π need to be?</p>
                <p className="text-gray-700">For most practical purposes, using 3.14159 (5 decimal places) is sufficient. School math often uses 3.14, which is accurate enough for basic problems. For precise engineering or scientific calculations, use your calculator&apos;s π button which typically stores 10+ decimal places.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Can circumference be negative?</p>
                <p className="text-gray-700">No, circumference is always a positive value because it represents a distance. Even if you end up with a negative number in your calculations, you&apos;ve made an error somewhere - check your formula and make sure you haven&apos;t accidentally used a negative radius.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">How do you find circumference with only the area?</p>
                <p className="text-gray-700">Use the formula C = 2π√(A/π). Divide the area by π, take the square root (this gives you the radius), then multiply by 2π. For example, if area is 100, then C = 2π√(100/π) = 2π√(31.83) = 2π(5.64) = 35.44 units.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">What real-world jobs use circumference calculations?</p>
                <p className="text-gray-700">Many careers use circumference regularly: civil engineers (designing roundabouts and curves), mechanical engineers (gears and wheels), architects (curved walls and domes), manufacturers (pipes and circular products), landscapers (circular gardens and patios), and even cyclists (calculating gear ratios and wheel rotations).</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Is there a formula for half a circle&apos;s circumference?</p>
                <p className="text-gray-700">For a semicircle (half circle), the curved edge is πr (half the full circumference of 2πr). However, the full perimeter of a semicircle also includes the diameter, so the total perimeter is πr + 2r, which simplifies to r(π + 2).</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Can I use 22/7 instead of π?</p>
                <p className="text-gray-700">Yes, 22/7 ≈ 3.142857 is a common fraction approximation of π that&apos;s slightly more accurate than 3.14. It&apos;s useful when working without a calculator. However, 3.14159 or your calculator&apos;s π button will give more accurate results.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">How many times does diameter go into circumference?</p>
                <p className="text-gray-700">The diameter goes into the circumference exactly π times (about 3.14159 times). This is the definition of π - it&apos;s the ratio C/d. So if you measure any circle&apos;s circumference and divide by its diameter, you&apos;ll always get approximately 3.14159.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">What&apos;s the circumference of Earth?</p>
                <p className="text-gray-700">Earth&apos;s circumference at the equator is approximately 40,075 kilometers (24,901 miles). This was first calculated accurately by Eratosthenes in ancient Greece around 240 BC using the circumference formula and observations of shadows at different latitudes.</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-semibold text-gray-900 mb-2">Do I need to memorize all three formulas?</p>
                <p className="text-gray-700">Technically, you only need to memorize C = 2πr. The diameter formula (C = πd) is just the radius formula with d substituted for 2r. The area formula is derived from combining the radius formula with the area formula. However, knowing all three makes problems faster to solve.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Conclusion
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Finding the circumference of a circle is a fundamental skill in mathematics with countless real-world applications. Whether you&apos;re using C = 2πr with the radius, C = πd with the diameter, or calculating from the area, the process is straightforward once you understand which formula to apply. The key is identifying what information you have and choosing the appropriate formula.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Remember that π is the constant that connects all circle measurements together. Understanding that π represents the ratio of circumference to diameter helps you see why these formulas work and how they&apos;re all related. With practice, these calculations become second nature, and you&apos;ll be able to quickly estimate circumferences mentally using the fact that circumference is roughly 6 times the radius.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Use our calculator above for instant results, or work through the examples to build your understanding. Master these formulas and you&apos;ll be well-equipped to tackle any problem involving circles, from basic geometry homework to complex engineering calculations.
            </p>
          </article>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <ArrowRight className="w-6 h-6 text-purple-600" />
            Related Circle Calculators
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="https://circumferenceofacircle.com" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Circumference Calculator</h3>
              <p className="text-sm text-gray-600">Quick circumference calculations</p>
            </a>
            <a href="https://areaofcircle.com" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Area Calculator</h3>
              <p className="text-sm text-gray-600">Find circle area using A = πr²</p>
            </a>
            <a href="https://radiusofacircle.com" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Radius Calculator</h3>
              <p className="text-sm text-gray-600">Calculate radius from other values</p>
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Circle Calculator Network</h2>
            <p className="text-gray-400">Professional mathematical tools for education and professional use</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Core Calculators</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://circumferenceofacircle.com" className="hover:text-white transition-colors">Circumference Calculator</a></li>
                <li><a href="https://areaofcircle.com" className="hover:text-white transition-colors">Area Calculator</a></li>
                <li><a href="https://equationofacircle.com" className="hover:text-white transition-colors">Equation Calculator</a></li>
                <li><a href="https://radiusofacircle.com" className="hover:text-white transition-colors">Radius Calculator</a></li>
                <li><a href="https://diameterofacircle.com" className="hover:text-white transition-colors">Diameter Calculator</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Formula Guides</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://circleareaformula.com" className="hover:text-white transition-colors">Area Formula πr²</a></li>
                <li><a href="https://circumferenceofacircleformula.com" className="hover:text-white transition-colors">Circumference Formula 2πr</a></li>
                <li><a href="https://areaofacircleformula.com" className="hover:text-white transition-colors">Circle Area Formula</a></li>
                <li><a href="https://formulaforareaofacircle.com" className="hover:text-white transition-colors">Formula Guide</a></li>
                <li><a href="https://surfaceareaofacircle.com" className="hover:text-white transition-colors">Surface Area Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Step-by-Step Tutorials</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://howtofindcircumference.com" className="hover:text-white transition-colors">How to Find Circumference</a></li>
                <li><a href="https://howtofindareaofacircle.com" className="hover:text-white transition-colors">How to Find Area</a></li>
                <li><a href="https://howtofindtheareaofacircle.com" className="hover:text-white transition-colors">Area Calculation Guide</a></li>
                <li><a href="https://howtofindcircumferenceofacircle.com" className="hover:text-white font-semibold">Circumference Guide (Current)</a></li>
                <li><a href="https://howtofindthecircumferenceofacircle.com" className="hover:text-white transition-colors">Complete Tutorial</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Specialized Tools</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://unitcircleradians.com" className="hover:text-white transition-colors">Unit Circle Radians</a></li>
                <li><a href="https://minecraftcirclechart.com" className="hover:text-white transition-colors">Minecraft Circle Chart</a></li>
                <li><a href="https://circlepng.com" className="hover:text-white transition-colors">Circle Images PNG</a></li>
                <li><a href="https://radiancircle.com" className="hover:text-white transition-colors">Radian Calculator</a></li>
                <li><a href="https://circleequation.com" className="hover:text-white transition-colors">Circle Equation Tools</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
            <p>© 2025 Circle Calculator Network. All calculators are free to use for educational and professional purposes.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}