import React from "react";
import { Link } from "react-router-dom";
import Book from "../assets/icons/bookIcon.svg";
import Clock from "../assets/icons/clockIcon.svg";
const Knowledge = () => {
  return (
    <div>
      <div className="container">
        <div className="w-[60%] mx-auto text-center">
          <h1 className="text-[50px] font-[600] text-white">
            A stream of endless knowledge.
          </h1>
          <p className="text-[20px] font-[500] text-white mb-8">
            We're kinda like Netflix , but for developers! Push your programming
            skils to the next level, through expert screencast on{" "}
            <span className="text-blue-500">
              PHP, Laravel, Vue and so much more
            </span>
            .
          </p>
        </div>
        <div>
          <div className="flex pb-10">
            <div className="mr-4 ">
              <div className="w-[376px] flex space-x-4 mb-4">
                <Link>
                  <div className="w-[180px]">
                    <img
                      className="px-10 py-6 bg-red-600 rounded-md w-[200px]"
                      src="https://ik.imagekit.io/laracasts/series/thumbnails/build-advanced-components-for-filament.png?tr=w-232"
                      alt="image"
                    />
                  </div>
                </Link>
                <Link>
                  <div className="w-[180px]">
                    <img
                      className="px-10 py-6 bg-light-green-600 rounded-md w-[200px]"
                      src="https://ik.imagekit.io/laracasts/series/thumbnails/pest-driven-laravel.png?tr=w-232"
                      alt="image"
                    />
                  </div>
                </Link>
              </div>
              <Link>
                <div className="bg-purple-600 w-[376px] h-[316px] overflow-hidden rounded-md mb-4">
                  <div className="flex  ">
                    <div
                      className="bg-no-repeat bg-left bg-cover"
                      style={{
                        width: `210px`,
                        height: `210px`,
                        marginLeft: `-100px`,
                        backgroundImage: `url("https://ik.imagekit.io/laracasts/series/thumbnails/svg/laravel-nova-mastery-2023.svg")`,
                      }}
                    ></div>

                    <div className="w-[240px] ml-4">
                      <h1 className="text-white text-[24px] font-[600] mb-4 pt-3">
                        Laravel Nova Mastery
                      </h1>
                      <p className="text-white text-[14px] mb-2">
                        Laravel Nova is the fastest way to build a full-fledged
                        administration panel for your Laravel applications. Now
                        in its fourth major iteration, it's more powerful than
                        ever!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end space-x-7">
                    <div className="w-[110px] pl-3">
                      <h1 className="text-center text-white mb-4 text-[14px]">
                        Advanced Difficulty
                      </h1>
                      <div className="flex space-x-2">
                        <div className="w-8 h-1 rounded bg-white"></div>
                        <div className="w-8 h-1 rounded bg-white"></div>
                        <div className="w-8 h-1 rounded bg-white"></div>
                      </div>
                    </div>
                    <div className="flex space-x-2 text-[14px]">
                      <div className="flex items-center">
                        <img className="w-6" src={Book} alt="" />
                        <p className="text-white ml-3">25 Lessons</p>
                      </div>
                      <div className="flex items-center">
                        <img src={Clock} alt="" />
                        <p className="text-white ml-3">3h 43m</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="bg-red-600 w-[376px] h-[316px] overflow-hidden rounded-md mb-4">
                  <div className="flex  ">
                    <div
                      className="bg-no-repeat bg-left bg-cover"
                      style={{
                        width: `210px`,
                        height: `210px`,
                        marginLeft: `-100px`,
                        backgroundImage: `url("https://ik.imagekit.io/laracasts/series/thumbnails/svg/build-shopify-apps-with-laravel.svg")`,
                      }}
                    ></div>

                    <div className="w-[240px] ml-4">
                      <h1 className="text-white text-[24px] font-[600] mb-4 py-5">
                        Build Shopify Apps With Laravel
                      </h1>
                      <p className="text-white text-[14px] mb-2">
                        Welcome to the world of Shopify, where I'll show you,
                        step by step, how to build a Shopify app with Laravel
                        from scratch.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end space-x-7 text-[14px]">
                    <div className="w-[110px] pl-3">
                      <h1 className="text-center text-white mb-4">
                        Intermediet Difficulty
                      </h1>
                      <div className="flex space-x-2">
                        <div className="w-8 h-1 rounded bg-white"></div>
                        <div className="w-8 h-1 rounded bg-white"></div>
                        <div className="w-8 h-1 rounded bg-gray-600"></div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="flex items-center">
                        <img className="w-6" src={Book} alt="" />
                        <p className="text-white ml-3">19 Lessons</p>
                      </div>
                      <div className="flex items-center">
                        <img src={Clock} alt="" />
                        <p className="text-white ml-3">3h 43m</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mr-4 ">
              <Link>
                <div className="w-[376px] h-[150px] flex bg-yellow-700 rounded-md mb-4">
                  <img
                    className="px-3 py-6 "
                    src="https://ik.imagekit.io/laracasts/series/thumbnails/pest-driven-laravel.png?tr=w-232"
                    alt="image"
                  />
                  <div>
                    <h1 className="text-white text-[24px] font-[600] mb-4 py-3">
                      Javascript: The First steps{" "}
                    </h1>
                    <div className="flex space-x-3 text-[14px]">
                      <div className="flex items-center">
                        <img className="w-6" src={Book} alt="" />
                        <p className="text-white ml-3">19 Lessons</p>
                      </div>
                      <div className="flex items-center">
                        <img src={Clock} alt="" />
                        <p className="text-white ml-3">3h 43m</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="w-[376px] h-[150px] flex bg-pink-500 rounded-md mb-4">
                  <img
                    className="px-3 py-6 "
                    src="https://ik.imagekit.io/laracasts/series/thumbnails/pest-driven-laravel.png?tr=w-232"
                    alt="image"
                  />
                  <div>
                    <h1 className="text-white text-[24px] font-[600] mb-4 py-3">
                      Javascript: The First steps{" "}
                    </h1>
                    <div className="flex space-x-3 text-[14px]">
                      <div className="flex items-center">
                        <img className="w-6" src={Book} alt="" />
                        <p className="text-white ml-3">19 Lessons</p>
                      </div>
                      <div className="flex items-center">
                        <img src={Clock} alt="" />
                        <p className="text-white ml-3">3h 43m</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="w-[376px] flex space-x-4 mb-4">
                <Link>
                  <div className="w-[180px]">
                    <img
                      className="px-10 py-6 bg-red-600 rounded-md w-[200px]"
                      src="https://ik.imagekit.io/laracasts/series/thumbnails/build-advanced-components-for-filament.png?tr=w-232"
                      alt="image"
                    />
                  </div>
                </Link>
                <Link>
                  <div className="w-[180px]">
                    <img
                      className="px-10 py-6 bg-light-green-600 rounded-md w-[200px]"
                      src="https://ik.imagekit.io/laracasts/series/thumbnails/pest-driven-laravel.png?tr=w-232"
                      alt="image"
                    />
                  </div>
                </Link>
              </div>
              <Link>
                <div className="bg-blue-800 w-[376px] h-[316px] overflow-hidden rounded-md">
                  <div className="flex  ">
                    <div
                      className="bg-no-repeat bg-left bg-cover"
                      style={{
                        width: `210px`,
                        height: `210px`,
                        marginLeft: `-100px`,
                        backgroundImage: `url("https://ik.imagekit.io/laracasts/series/thumbnails/svg/build-shopify-apps-with-laravel.svg")`,
                      }}
                    ></div>

                    <div className="w-[240px] ml-4">
                      <h1 className="text-white text-[24px] font-[600] mb-4 py-5">
                        Build Shopify Apps With Laravel
                      </h1>
                      <p className="text-white text-[14px] mb-2">
                        Welcome to the world of Shopify, where I'll show you,
                        step by step, how to build a Shopify app with Laravel
                        from scratch.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end space-x-7 text-[14px]">
                    <div className="w-[110px] pl-3">
                      <h1 className="text-center text-white mb-4">
                        Intermediet Difficulty
                      </h1>
                      <div className="flex space-x-2">
                        <div className="w-8 h-1 rounded bg-white"></div>
                        <div className="w-8 h-1 rounded bg-white"></div>
                        <div className="w-8 h-1 rounded bg-gray-600"></div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="flex items-center">
                        <img className="w-6" src={Book} alt="" />
                        <p className="text-white ml-3">19 Lessons</p>
                      </div>
                      <div className="flex items-center">
                        <img src={Clock} alt="" />
                        <p className="text-white ml-3">3h 43m</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="">
              <div className="flex">
              <Link>
                <div className="bg-blue-800 w-[376px] h-[316px] overflow-hidden rounded-md mr-4">
                  <div className="flex  ">
                    <div
                      className="bg-no-repeat bg-left bg-cover"
                      style={{
                        width: `210px`,
                        height: `210px`,
                        marginLeft: `-100px`,
                        backgroundImage: `url("https://ik.imagekit.io/laracasts/series/thumbnails/svg/build-shopify-apps-with-laravel.svg")`,
                      }}
                    ></div>

                    <div className="w-[240px] ml-4">
                      <h1 className="text-white text-[24px] font-[600] mb-4 py-5">
                        Build Shopify Apps With Laravel
                      </h1>
                      <p className="text-white text-[14px] mb-2">
                        Welcome to the world of Shopify, where I'll show you,
                        step by step, how to build a Shopify app with Laravel
                        from scratch.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end space-x-7 text-[14px]">
                    <div className="w-[110px] pl-3">
                      <h1 className="text-center text-white mb-4">
                        Intermediet Difficulty
                      </h1>
                      <div className="flex space-x-2">
                        <div className="w-8 h-1 rounded bg-white"></div>
                        <div className="w-8 h-1 rounded bg-white"></div>
                        <div className="w-8 h-1 rounded bg-gray-600"></div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="flex items-center">
                        <img className="w-6" src={Book} alt="" />
                        <p className="text-white ml-3">19 Lessons</p>
                      </div>
                      <div className="flex items-center">
                        <img src={Clock} alt="" />
                        <p className="text-white ml-3">3h 43m</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </Link>
              <div className="w-[180px] space-x-4 mb-4">
                <Link>
                  <div className="w-[180px]">
                    <img
                      className="px-10 py-6 bg-red-600 rounded-md w-[200px]"
                      src="https://ik.imagekit.io/laracasts/series/thumbnails/build-advanced-components-for-filament.png?tr=w-232"
                      alt="image"
                    />
                  </div>
                </Link>
                <Link>
                  <div className="w-[180px]">
                    <img
                      className="px-10 py-6 bg-light-green-600 rounded-md w-[200px]"
                      src="https://ik.imagekit.io/laracasts/series/thumbnails/pest-driven-laravel.png?tr=w-232"
                      alt="image"
                    />
                  </div>
                </Link>
              </div>
              </div>
              <div className="flex">
              <Link>
                <div className="bg-blue-800 w-[376px] h-[316px] overflow-hidden rounded-md mr-4">
                  <div className="flex  ">
                    <div
                      className="bg-no-repeat bg-left bg-cover"
                      style={{
                        width: `210px`,
                        height: `210px`,
                        marginLeft: `-100px`,
                        backgroundImage: `url("https://ik.imagekit.io/laracasts/series/thumbnails/svg/build-shopify-apps-with-laravel.svg")`,
                      }}
                    ></div>

                    <div className="w-[240px] ml-4">
                      <h1 className="text-white text-[24px] font-[600] mb-4 py-5">
                        Build Shopify Apps With Laravel
                      </h1>
                      <p className="text-white text-[14px] mb-2">
                        Welcome to the world of Shopify, where I'll show you,
                        step by step, how to build a Shopify app with Laravel
                        from scratch.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end space-x-7 text-[14px]">
                    <div className="w-[110px] pl-3">
                      <h1 className="text-center text-white mb-4">
                        Intermediet Difficulty
                      </h1>
                      <div className="flex space-x-2">
                        <div className="w-8 h-1 rounded bg-white"></div>
                        <div className="w-8 h-1 rounded bg-white"></div>
                        <div className="w-8 h-1 rounded bg-gray-600"></div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="flex items-center">
                        <img className="w-6" src={Book} alt="" />
                        <p className="text-white ml-3">19 Lessons</p>
                      </div>
                      <div className="flex items-center">
                        <img src={Clock} alt="" />
                        <p className="text-white ml-3">3h 43m</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </Link>
              <div className="w-[180px] space-x-4 mb-4">
                <Link>
                  <div className="w-[180px]">
                    <img
                      className="px-10 py-6 bg-red-600 rounded-md w-[200px]"
                      src="https://ik.imagekit.io/laracasts/series/thumbnails/build-advanced-components-for-filament.png?tr=w-232"
                      alt="image"
                    />
                  </div>
                </Link>
                <Link>
                  <div className="w-[180px]">
                    <img
                      className="px-10 py-6 bg-light-green-600 rounded-md w-[200px]"
                      src="https://ik.imagekit.io/laracasts/series/thumbnails/pest-driven-laravel.png?tr=w-232"
                      alt="image"
                    />
                  </div>
                </Link>
              </div>
              </div>
              <div className="flex">
              <Link>
                  <div className="w-[180px] mr-4">
                    <img
                      className="px-10 py-6 bg-red-600 rounded-md w-[200px]"
                      src="https://ik.imagekit.io/laracasts/series/thumbnails/build-advanced-components-for-filament.png?tr=w-232"
                      alt="image"
                    />
                  </div>
                </Link>
                <Link>
                <div className="w-[376px] h-[150px] flex bg-yellow-700 rounded-md mb-4">
                  <img
                    className="px-3 py-6 "
                    src="https://ik.imagekit.io/laracasts/series/thumbnails/pest-driven-laravel.png?tr=w-232"
                    alt="image"
                  />
                  <div>
                    <h1 className="text-white text-[24px] font-[600] mb-4 py-3">
                      Javascript: The First steps{" "}
                    </h1>
                    <div className="flex space-x-3 text-[14px]">
                      <div className="flex items-center">
                        <img className="w-6" src={Book} alt="" />
                        <p className="text-white ml-3">19 Lessons</p>
                      </div>
                      <div className="flex items-center">
                        <img src={Clock} alt="" />
                        <p className="text-white ml-3">3h 43m</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
