import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
  try {
    const newTour = new Tour(req.body);
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "Successfully Created",
      data: savedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to Create",
    });
  }
};

export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(id, {
      $set: req.body,
    });

    res.status(200).json(
      {
        success: true,
        message: "Successfully Update",
        data: updatedTour,
      },
      { new: true }
    );
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

export const getSingleTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findById(id).populate("reviews");

    return res.status(200).json({
      success: true,
      message: "Successfully load data",
      data: tour,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getAllTour = async (req, res) => {
  //pagination
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully load all data",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getToursBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully load all data",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getFeaturedTours = async (_req, res) => {
  try {
    // const tours = await Tour.find({ featured: true })
    //   .populate("reviews")
    //   .limit(8);

    res.status(200).json({
      success: true,
      message: "Successfully load all data",
      data: [
        {
          _id: "64d5d652fc27690df70e47d3",
          title: "Beautiful Sunrise, Thailand",
          city: "Phuket",
          address: "Somewhere in Thailand",
          distance: 500,
          photo: "/tour-images/tour-img04.jpg",
          desc: "this is the description",
          price: 99,
          maxGroupSize: 8,
          reviews: [
            {
              _id: "65d87c961cb637d12d21069b",
              username: "vivek",
              reviewText: "this is beautiful",
              rating: 5,
              createdAt: "2024-02-23T11:08:06.578Z",
              updatedAt: "2024-02-23T11:08:06.578Z",
              __v: 0,
            },
            {
              _id: "65d87d721cb637d12d2106a6",
              username: "vivek",
              reviewText: "this is beautiful",
              rating: 5,
              createdAt: "2024-02-23T11:11:46.132Z",
              updatedAt: "2024-02-23T11:11:46.132Z",
              __v: 0,
            },
            {
              _id: "65d880901cb637d12d2106fc",
              username: "vivek",
              reviewText: "this is beautiful",
              rating: 5,
              createdAt: "2024-02-23T11:25:04.114Z",
              updatedAt: "2024-02-23T11:25:04.114Z",
              __v: 0,
            },
            {
              _id: "65d880c41cb637d12d210700",
              username: "krishi",
              reviewText: "this is beautiful",
              rating: 5,
              createdAt: "2024-02-23T11:25:56.204Z",
              updatedAt: "2024-02-23T11:25:56.204Z",
              __v: 0,
            },
          ],
          featured: true,
          createdAt: "2023-08-11T06:33:54.435Z",
          updatedAt: "2024-02-23T11:25:56.264Z",
          __v: 0,
        },
        {
          _id: "64d5d63dfc27690df70e47cf",
          title: "Bali, Indonesia",
          city: "Bali",
          address: "Somewhere in Indonesia",
          distance: 400,
          photo: "/tour-images/tour-img02.jpg",
          desc: "this is the description",
          price: 99,
          maxGroupSize: 8,
          reviews: [
            {
              _id: "64df15e9e39614fa5e448a95",
              username: "vivek123",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-18T06:55:37.130Z",
              updatedAt: "2023-08-18T06:55:37.130Z",
              __v: 0,
            },
            {
              _id: "64e460a218b22d0f99b80505",
              username: "vivek123",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-22T07:15:46.458Z",
              updatedAt: "2023-08-22T07:15:46.458Z",
              __v: 0,
            },
            {
              _id: "64e46f49a3af87656b943f97",
              username: "vivek123",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-22T08:18:17.110Z",
              updatedAt: "2023-08-22T08:18:17.110Z",
              __v: 0,
            },
            {
              _id: "64e475ebb7526e1299078ca1",
              username: "vivek_123",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-22T08:46:35.471Z",
              updatedAt: "2023-08-22T08:46:35.471Z",
              __v: 0,
            },
            {
              _id: "64e475f0b7526e1299078ca4",
              username: "vivek123",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-22T08:46:40.772Z",
              updatedAt: "2023-08-22T08:46:40.772Z",
              __v: 0,
            },
            {
              _id: "64e4760d87f87eecb7e58884",
              username: "vivek123",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-22T08:47:09.572Z",
              updatedAt: "2023-08-22T08:47:09.572Z",
              __v: 0,
            },
            {
              _id: "64e47614940066a2a9b88296",
              username: "vivek123",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-22T08:47:16.647Z",
              updatedAt: "2023-08-22T08:47:16.647Z",
              __v: 0,
            },
            {
              _id: "64e4761c3e7a004cb84a492d",
              username: "vivek123",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-22T08:47:24.451Z",
              updatedAt: "2023-08-22T08:47:24.451Z",
              __v: 0,
            },
            {
              _id: "64e47d950e433b9a67d5928a",
              username: "vivek123",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-22T09:19:17.706Z",
              updatedAt: "2023-08-22T09:19:17.706Z",
              __v: 0,
            },
            {
              _id: "64e47da10e433b9a67d5928d",
              username: "vivek123",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-22T09:19:29.844Z",
              updatedAt: "2023-08-22T09:19:29.844Z",
              __v: 0,
            },
            {
              _id: "64e47db80e433b9a67d59292",
              username: "vivek123",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-22T09:19:52.978Z",
              updatedAt: "2023-08-22T09:19:52.978Z",
              __v: 0,
            },
            {
              _id: "64e88f5c3d744dfc6bc2b686",
              username: "vivek123",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-25T11:24:12.691Z",
              updatedAt: "2023-08-25T11:24:12.691Z",
              __v: 0,
            },
            {
              _id: "64ec8ea42fcd933b1e6787ec",
              username: "vivek123",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-28T12:10:12.938Z",
              updatedAt: "2023-08-28T12:10:12.938Z",
              __v: 0,
            },
            {
              _id: "65c21095ddbbf9d319d2437b",
              username: "vivek123",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2024-02-06T10:57:25.463Z",
              updatedAt: "2024-02-06T10:57:25.463Z",
              __v: 0,
            },
          ],
          featured: true,
          createdAt: "2023-08-11T06:33:33.081Z",
          updatedAt: "2024-02-06T10:57:26.092Z",
          __v: 0,
        },
        {
          _id: "64d5d627fc27690df70e47cd",
          title: "Westminister Bridge",
          city: "London",
          address: "Somewhere in London",
          distance: 300,
          photo: "/tour-images/tour-img01.jpg",
          desc: "this is the description",
          price: 99,
          maxGroupSize: 10,
          reviews: [
            {
              _id: "64d9ccb4d640e204cf45dd31",
              username: "abab",
              reviewText: "this is amazing tour",
              rating: 5,
              createdAt: "2023-08-14T06:41:56.007Z",
              updatedAt: "2023-08-14T06:41:56.007Z",
              __v: 0,
            },
            {
              _id: "64dcbcf58ae7a69b68f6368d",
              username: "abab",
              reviewText: "this is amazing tour",
              rating: 5,
              createdAt: "2023-08-16T12:11:33.729Z",
              updatedAt: "2023-08-16T12:11:33.729Z",
              __v: 0,
            },
            {
              _id: "64def66e6f1236651fb8426d",
              username: "abab",
              reviewText: "this is amazing tour",
              rating: 5,
              createdAt: "2023-08-18T04:41:18.226Z",
              updatedAt: "2023-08-18T04:41:18.226Z",
              __v: 0,
            },
            {
              _id: "64defe796f1236651fb84272",
              username: "abab",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-18T05:15:37.781Z",
              updatedAt: "2023-08-18T05:15:37.781Z",
              __v: 0,
            },
            {
              _id: "64deff7f6f1236651fb84276",
              username: "abab",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-18T05:19:59.011Z",
              updatedAt: "2023-08-18T05:19:59.011Z",
              __v: 0,
            },
            {
              _id: "64deffda6f1236651fb8427a",
              username: "abab",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-18T05:21:30.113Z",
              updatedAt: "2023-08-18T05:21:30.113Z",
              __v: 0,
            },
            {
              _id: "64deffeb009fbfc9add8dd60",
              username: "abab",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2023-08-18T05:21:47.673Z",
              updatedAt: "2023-08-18T05:21:47.673Z",
              __v: 0,
            },
            {
              _id: "65d84313c911426d81824801",
              username: "vivek",
              reviewText: "heyyy",
              rating: 5,
              createdAt: "2024-02-23T07:02:43.624Z",
              updatedAt: "2024-02-23T07:02:43.624Z",
              __v: 0,
            },
            {
              _id: "65d84314c911426d81824804",
              username: "vivek",
              reviewText: "heyyy",
              rating: 5,
              createdAt: "2024-02-23T07:02:44.621Z",
              updatedAt: "2024-02-23T07:02:44.621Z",
              __v: 0,
            },
          ],
          featured: true,
          createdAt: "2023-08-11T06:33:11.243Z",
          updatedAt: "2024-02-23T07:02:44.656Z",
          __v: 0,
        },
        {
          _id: "64d5d647fc27690df70e47d1",
          title: "Snowy Mountains, Thailand",
          city: "Bangkok",
          address: "Somewhere in Thailand",
          distance: 500,
          photo: "/tour-images/tour-img03.jpg",
          desc: "this is the description",
          price: 99,
          maxGroupSize: 8,
          reviews: [
            {
              _id: "659fa0686105b78c99259ad0",
              username: "Pavak",
              reviewText: "nice place",
              rating: 5,
              createdAt: "2024-01-11T08:01:44.311Z",
              updatedAt: "2024-01-11T08:01:44.311Z",
              __v: 0,
            },
            {
              _id: "65c5db11a4b1dee5adab8e87",
              username: "hello",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2024-02-09T07:58:09.530Z",
              updatedAt: "2024-02-09T07:58:09.530Z",
              __v: 0,
            },
            {
              _id: "65cd9e2727d2e480c34d45a6",
              username: "hello",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2024-02-15T05:16:23.207Z",
              updatedAt: "2024-02-15T05:16:23.207Z",
              __v: 0,
            },
            {
              _id: "65d86be2c7b4bcf13d34ad80",
              username: "vivek",
              reviewText: "now today",
              rating: 4,
              createdAt: "2024-02-23T09:56:50.790Z",
              updatedAt: "2024-02-23T09:56:50.790Z",
              __v: 0,
            },
          ],
          featured: true,
          createdAt: "2023-08-11T06:33:43.616Z",
          updatedAt: "2024-02-23T09:56:50.847Z",
          __v: 0,
        },
        {
          _id: "64d5d65ffc27690df70e47d5",
          title: "Nusa Pendia Bali, Indonesia",
          city: "Bali",
          address: "Somewhere in Indonesia",
          distance: 500,
          photo: "/tour-images/tour-img05.jpg",
          desc: "this is the description",
          price: 99,
          maxGroupSize: 8,
          reviews: [
            {
              _id: "65d872f91cb637d12d21061e",
              username: "vivek",
              reviewText: "hello",
              rating: 5,
              createdAt: "2024-02-23T10:27:05.085Z",
              updatedAt: "2024-02-23T10:27:05.085Z",
              __v: 0,
            },
            {
              _id: "65d875091cb637d12d21062b",
              username: "vivek",
              reviewText: "jioi",
              rating: 5,
              createdAt: "2024-02-23T10:35:53.011Z",
              updatedAt: "2024-02-23T10:35:53.011Z",
              __v: 0,
            },
          ],
          featured: true,
          createdAt: "2023-08-11T06:34:07.652Z",
          updatedAt: "2024-02-23T10:35:53.119Z",
          __v: 0,
        },
        {
          _id: "64d5d66afc27690df70e47d7",
          title: "Cherry Blossoms Spring",
          city: "Tokyo",
          address: "Somewhere in Japan",
          distance: 500,
          photo: "/tour-images/tour-img06.jpg",
          desc: "this is the description",
          price: 99,
          maxGroupSize: 8,
          reviews: [
            {
              _id: "64e891243d744dfc6bc2b6ac",
              username: "vivek_123",
              reviewText: "sss",
              rating: 5,
              createdAt: "2023-08-25T11:31:48.005Z",
              updatedAt: "2023-08-25T11:31:48.005Z",
              __v: 0,
            },
            {
              _id: "64e891a54a9f02371a0dc6be",
              username: "vivek_123",
              reviewText: "sss",
              rating: 5,
              createdAt: "2023-08-25T11:33:57.694Z",
              updatedAt: "2023-08-25T11:33:57.694Z",
              __v: 0,
            },
            {
              _id: "64e891c69f9a04d1b3d8a860",
              username: "vivek_123",
              reviewText: "sss",
              rating: 5,
              createdAt: "2023-08-25T11:34:30.585Z",
              updatedAt: "2023-08-25T11:34:30.585Z",
              __v: 0,
            },
            {
              _id: "65cd9e4c27d2e480c34d45a9",
              username: "vivek",
              reviewText: "this is beautiful tour",
              rating: 5,
              createdAt: "2024-02-15T05:17:00.851Z",
              updatedAt: "2024-02-15T05:17:00.851Z",
              __v: 0,
            },
            {
              _id: "65cdad0227d2e480c34d45f2",
              username: "vivek",
              reviewText: "this is beautiful",
              rating: 5,
              createdAt: "2024-02-15T06:19:46.827Z",
              updatedAt: "2024-02-15T06:19:46.827Z",
              __v: 0,
            },
            {
              _id: "65cdb56e2e2092689ffc701f",
              username: "vivek",
              reviewText: "this is beautiful",
              rating: 5,
              createdAt: "2024-02-15T06:55:42.149Z",
              updatedAt: "2024-02-15T06:55:42.149Z",
              __v: 0,
            },
          ],
          featured: true,
          createdAt: "2023-08-11T06:34:18.263Z",
          updatedAt: "2024-02-15T06:55:42.210Z",
          __v: 0,
        },
        {
          _id: "64d5d674fc27690df70e47d9",
          title: "Holmen Lofoten, France",
          city: "Paris",
          address: "Somewhere in France",
          distance: 500,
          photo: "/tour-images/tour-img07.jpg",
          desc: "this is the description",
          price: 99,
          maxGroupSize: 8,
          reviews: [],
          featured: true,
          createdAt: "2023-08-11T06:34:28.596Z",
          updatedAt: "2023-08-11T06:34:28.596Z",
          __v: 0,
        },
        {
          _id: "65c20fbeddbbf9d319d2436d",
          title: "ladakh",
          city: "ladakh",
          address: "Somewhere in india",
          distance: 500,
          photo: "/tour-images/tour-img09.jpg",
          desc: "this is the description",
          price: 99,
          maxGroupSize: 8,
          reviews: [],
          featured: true,
          createdAt: "2024-02-06T10:53:50.396Z",
          updatedAt: "2024-02-06T10:53:50.396Z",
          __v: 0,
        },
      ],
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to load datsssa",
    });
  }
};

export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({
      success: true,
      data: tourCount,
      message: "Getting Tours Count",
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to load tour Count",
    });
  }
};
